import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { CheckLogin } from './CheckLogin';
import { FilmProps, ListfilmProps } from './CustomProps';
import { UserContext } from './UserContext';

export default function ListFilms<FilmsType extends FilmProps[], FavoType extends string[]>({ //Generic Type
    films, favoFilms, setFavo, handleOpenDialog, openDiaglog, handleCloseDialog
}: ListfilmProps<FilmsType, FavoType>) {

    const userContext = useContext(UserContext)

    const getArrayUserID = async (name: string) => {
        try {
            const urlName = 'https://64e75fafb0fd9648b78fdde6.mockapi.io/listFavo/?name=' + name
            const res = await fetch(urlName);
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const film = await res.json();
            return film[0].userID;
        } catch (error) {
            console.log(error)
        }
    }

    const updateFavo = async (filmID: number, userID: number) => {
        const urlUpdate = 'https://64e75fafb0fd9648b78fdde6.mockapi.io/listFavo/' + filmID
        fetch(urlUpdate, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ userID: userID })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(fillms => {
            // Do something with updated task
        }).catch(error => {
            // handle error
        })
    }

    const handelFavo = async (filmID: number, filmName: string, notFavo: string, userID?: string) => {
        let newValue: string;
        let arrayOfUserID = await getArrayUserID(filmName);
        const index = arrayOfUserID.indexOf(userID);
        if (notFavo === 'true') {
            newValue = 'false';
            arrayOfUserID.splice(index, 1); //Xóa 1 phần tử từ vị trí đó(index bắt đầu từ 1)
            await updateFavo(filmID, arrayOfUserID);
            console.log('Unfavo film: ' + filmName);
        } else {
            newValue = 'true';
            arrayOfUserID.push(userID);
            await updateFavo(filmID, arrayOfUserID);
            console.log('Favo film: ' + filmName);
        }
        setFavo(prevArray => {
            const newArray = [...prevArray];
            newArray[filmID - 1] = newValue;
            return newArray;
        });
    }

    return (
        <>
            {films.map((film) => (
                <Grid item key={film.id} xs={6} sm={4} lg={3}>
                    <Card className='custom_card'>
                        <CardMedia
                            component="img"
                            image={film.img}
                            alt={`Pic of ${film.name}`}
                        />
                        <CardContent className='custom_card_content'>
                            <Typography className='custom_txt' variant='h5'>{film.name}</Typography>
                            <Box className='content_favo'>
                                <Typography className='custom_txt' variant='h6'>Favourited: </Typography>
                                {userContext?.user ?
                                    <Link to={''} onClick={() => { handelFavo(film.id, film.name, favoFilms[film.id - 1], userContext?.user?.id) }}>
                                        {favoFilms[film.id - 1] === 'true' ?
                                            <StarIcon className='is_favo_icon yes' /> : <StarIcon className='is_favo_icon no' />}
                                    </Link>
                                    :
                                    <Box>
                                        <IconButton className='custom_icon_btn' onClick={handleOpenDialog}>
                                            <StarIcon className='is_favo_icon no'>star</StarIcon>
                                        </IconButton>
                                        <CheckLogin open={openDiaglog} handleClose={handleCloseDialog} profile={userContext?.user} />
                                    </Box>

                                }
                            </Box>
                            <Button className='custom_btn' variant='contained'>
                                <Link className='custom_link' to={`detail/${film.id}`}>
                                    <Typography className='custom_txt' variant='body1'>Detail</Typography>
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

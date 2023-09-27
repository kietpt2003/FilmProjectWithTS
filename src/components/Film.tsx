import { useContext, useEffect, useState } from 'react'
import { Box, Container, Grid, Pagination, Stack } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import { FilmProps } from './CustomProps';
import { UserContext } from './UserContext';
import ListFilms from './ListFilms';

export default function Film() {
    const userContext = useContext(UserContext)
    const [data, setData] = useState<FilmProps[]>([]);
    const [films, setFilms] = useState<FilmProps[]>([]);
    const [favoFilms, setFavo] = useState<string[]>([]);
    const { dark } = useContext(ThemeContext)
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const [page, setPage] = useState(1);
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        switch (value) {
            case 1:
                setFilms(data.slice(0, 6));
                break;
            case 2:
                setFilms(data.slice(6, 12));
                break;
            case 3:
                setFilms(data.slice(12, 18));
                break;
            default:
                setFilms(data.slice(0, 6));
                break;
        }
        setPage(value);
    };

    const getFavoFilm = async () => {
        try {
            const urlName = 'https://64e75fafb0fd9648b78fdde6.mockapi.io/listFavo/'
            const res = await fetch(urlName); //Prototype - Response
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const films = await res.json(); //Promise
            let arrayFavo: string[] = []
            for (let i = 0; i < films.length; i++) {
                if (films[i].userID.includes(userContext?.user?.id)) {
                    arrayFavo.push('true');
                } else {
                    arrayFavo.push('false');
                }
            }
            setData(films);
            setFilms(films.slice(0, 6));
            setFavo(arrayFavo);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFavoFilm();
    }, [userContext?.user])
    return (
        <Container className={dark ? 'darkTheme' : 'whiteTheme'} fixed>
            <Box>
                <Grid container spacing={2}>
                    <ListFilms films={films} favoFilms={favoFilms} setFavo={setFavo} handleOpenDialog={handleOpenDialog} openDialog={openDialog} handleCloseDialog={handleCloseDialog} />
                </Grid>
                <Stack spacing={2} className={'custom_pagination'}>
                    <Pagination count={3} page={page} onChange={handleChangePage} />
                </Stack>
            </Box>
        </Container>
    )
}
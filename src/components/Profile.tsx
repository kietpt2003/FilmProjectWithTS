import { useContext } from 'react'
import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import Contact from './Contact';
import { makeStyles } from '@material-ui/core';
import { blue } from '@mui/material/colors';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';
import TextFieldCustom from './TextFieldCustom';

export default function Profile() {
    const userContext = useContext(UserContext)
    const { dark } = useContext(ThemeContext)

    const useStyle = makeStyles(() => ({
        darkTheme: {
            '& .website_logo': {
                display: 'flex',
                '& .logo_img': {
                    height: '10rem',
                    width: '10rem'
                },
                '& .logo_info': {
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    '& .name': {
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        '& .css-ag7rrr-MuiTypography-root': {
                            color: 'white',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        }
                    },
                    '& .verified_icon': {
                        color: '#522733',
                        '& .css-i4bv87-MuiSvgIcon-root': {
                            marginLeft: '0.3rem',
                            fontSize: '1.2em',
                        },
                    },
                    '& .link': {
                        '& .css-ahj2mt-MuiTypography-root': {
                            color: 'white',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        },
                        '&.custom_link_icon': {
                            '& .css-i4bv87-MuiSvgIcon-root': {
                                color: 'white',
                                fontSize: '0.8em',
                                marginLeft: '0.3rem',
                            },
                        }
                    }
                },
            },
            '& .your_profile': {
                paddingTop: '0.5rem',
                borderTop: '0.2rem solid rgba(255, 255, 255, 0.7)',
                color: 'white',
                '& .css-ag7rrr-MuiTypography-root': {
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                },
                '& .css-ahj2mt-MuiTypography-root': {
                    fontFamily: 'monospace',
                },
                '& .custom_text_field': {
                    '& .MuiFormLabel-root.Mui-disabled': {
                        '&.Mui-error': {
                            color: 'red',
                        },
                        color: 'white',
                        fontFamily: 'monospace',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'red',
                        },
                        '&  .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        }
                    },
                    '& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled.Mui-disabled': {
                        '-webkit-text-fill-color': 'rgba(174, 177, 182, 0.75)',
                        fontFamily: 'monospace',
                    },
                    '&.error': {
                        '& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
                            '-webkit-text-fill-color': 'red',
                            fontFamily: 'monospace',
                        },
                    }
                },
            }
        },
        whiteTheme: {
            '& .website_logo': {
                display: 'flex',
                '& .logo_img': {
                    height: '10rem',
                    width: '10rem'
                },
                '& .logo_info': {
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    '& .name': {
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        '& .css-ag7rrr-MuiTypography-root': {
                            color: blue[900],
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        }
                    },
                    '& .verified_icon': {
                        color: '#522733',
                        '& .css-i4bv87-MuiSvgIcon-root': {
                            marginLeft: '0.3rem',
                            fontSize: '1.2em',
                        },
                    },
                    '& .link': {
                        '& .css-ahj2mt-MuiTypography-root': {
                            color: blue[900],
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        },
                        '&.custom_link_icon': {
                            '& .css-i4bv87-MuiSvgIcon-root': {
                                color: blue[900],
                                fontSize: '0.8em',
                                marginLeft: '0.3rem',
                            },
                        }
                    }

                },
            },
            '& .your_profile': {
                paddingTop: '0.5rem',
                borderTop: '0.2rem solid rgba(255, 255, 255, 0.7)',
                borderColor: blue[900],
                color: blue[900],
                '& .css-ag7rrr-MuiTypography-root': {
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                },
                '& .profile_info': {
                    '& .css-ahj2mt-MuiTypography-root': {
                        fontFamily: 'monospace',
                    },
                },
                '& .custom_text_field': {
                    '& .MuiFormLabel-root.Mui-disabled': {
                        '&.Mui-error': {
                            color: 'red',
                        },
                        color: blue[900],
                        fontFamily: 'monospace',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'red',
                        },
                        '&  .MuiOutlinedInput-notchedOutline': {
                            borderColor: blue[900],
                        }
                    },
                    '& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
                        '-webkit-text-fill-color': 'rgba(11, 54, 227, 0.38)',
                        fontFamily: 'monospace',
                    },
                    '&.error': {
                        '& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
                            '-webkit-text-fill-color': 'red',
                            fontFamily: 'monospace',
                        },
                    }
                },
            }
        }
    }))

    const classes = useStyle();

    return (
        <Box className={dark ? classes.darkTheme : classes.whiteTheme}>
            <Container>
                <Box className={'website_logo'}>
                    <Box className='logo_img' component={'img'} src='../assets/images/LogoFilmWebsite.png' alt='Logo Film' />
                    <Box className='logo_info'>
                        <Box className='logo_info name verified_icon'>
                            <Typography variant='h5'>PHEPHIMVN</Typography>
                            <VerifiedIcon />
                        </Box>
                        <Box className='logo_info name link custom_link_icon'>
                            <Typography variant='body1'>phephimvn.com.vn</Typography>
                            <Link to={`http://localhost:3000/`}>
                                <OpenInNewIcon />
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box className={'your_profile'}>
                    <Grid className='profile_info' container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h5'>Your Profile</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldCustom givenName={userContext?.user?.given_name!} isVerified={userContext?.user?.verified_email!} /> {/**Restrict Props(Có prop này thì ko dc có prop kia => truyền name rồi thì k dc truyền thêm email) */}
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldCustom email={userContext?.user?.email!} isVerified={userContext?.user?.verified_email!} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='body1'>Account verification: {userContext?.user?.verified_email ? 'Yes' : 'No'}</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Contact />
                </Box>
            </Container>
        </Box>
    )
}
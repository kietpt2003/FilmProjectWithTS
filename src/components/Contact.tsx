import { useEffect, useState } from 'react'
import { useForm, Form } from './useForm';
import { Alert, Button, Grid, IconButton, Snackbar, TextField, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListContact } from './InterfaceWithClass/ListContact';
import { ContactClass } from './InterfaceWithClass/ContactClass';
import { ContactInterface } from './InterfaceWithClass/ContactInterface';

const initialValue = {
    name: '',
    phone: '',
    email: '',
    suggestion: ''
}
const sendedForm: ContactInterface[] = []

export default function Contact() {
    const { values, handleInputChange, handelForm, msgError, arrErrorMsg } = useForm(initialValue);
    const [isSend, setSend] = useState(false);
    const [isError, setError] = useState(false);
    const [showHistory, setShow] = useState(false);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await handelForm(values);
        if (result === 'send success') {
            const formInfo: ContactInterface = new ContactClass(values.name, values.phone, values.email, values.suggestion)
            sendedForm.push(formInfo)
            setError(false)
        } else {
            setError(true)
        }
        setSend(true);
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setSend(false);
    };

    useEffect(() => {
        // list template instance
        if (sendedForm) {
            const ul = document.querySelector('ul')!;
            const list = new ListContact(ul);
            sendedForm.forEach(form => {
                list.render(form, 'end')
            });
        }
    }, [showHistory])

    return (
        <>
            <Form>
                <Grid container>
                    <Grid item xs={12} className='config_contact'>
                        <Typography className='contact_title' variant='h5'>Contact Us</Typography>
                        <IconButton className='historyBtn' onClick={() => setShow(!showHistory)}>
                            Show History{showHistory ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        {showHistory &&
                            <ul className="item-list">

                            </ul>
                        }
                    </Grid>
                    <Grid className='contact_form' item xs={12}>
                        <TextField
                            error={msgError?.nameErr === arrErrorMsg[0] || msgError?.nameErr === arrErrorMsg[1]}
                            helperText={msgError?.nameErr ? msgError?.nameErr : ' '}
                            variant='outlined'
                            label="Name"
                            placeholder='Enter Your Name'
                            fullWidth
                            name='name'
                            value={values.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            error={msgError?.phoneErr === arrErrorMsg[2] || msgError?.phoneErr === arrErrorMsg[3] || msgError?.phoneErr === arrErrorMsg[4] || msgError?.phoneErr === arrErrorMsg[5]}
                            helperText={msgError?.phoneErr ? msgError?.phoneErr : ' '}
                            variant='outlined'
                            label="Phone Number"
                            placeholder='Enter Your Phone Number'
                            fullWidth
                            name='phone'
                            value={values.phone}
                            onChange={handleInputChange}
                        />
                        <TextField
                            error={msgError?.emailErr === arrErrorMsg[6] || msgError?.emailErr === arrErrorMsg[7]}
                            helperText={msgError?.emailErr ? msgError?.emailErr : ' '}
                            variant='outlined'
                            label="Email"
                            placeholder='Enter Your Email'
                            fullWidth
                            name='email'
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            error={msgError?.suggErr === arrErrorMsg[8]}
                            helperText={msgError?.suggErr ? msgError?.suggErr : ' '}
                            variant='outlined'
                            label='Suggestion'
                            placeholder='Enter Your Suggestion'
                            fullWidth
                            name='suggestion'
                            value={values.suggestion}
                            onChange={handleInputChange}
                            multiline
                            rows={5}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='contact_btn' variant='contained' fullWidth onClick={(event) => handleSubmit(event)}>Send</Button>
                    </Grid>
                </Grid>
            </Form>
            {(isSend && !isError) &&
                <Snackbar open={isSend} autoHideDuration={4000} onClose={handleClose}>
                    <Alert
                        severity="success"
                        variant="filled"
                        onClose={handleClose}
                    >
                        Send Successfully!
                    </Alert>
                </Snackbar>
            }
            {(isSend && isError) &&
                <Snackbar open={(isSend || isError)} autoHideDuration={4000} onClose={handleClose}>
                    <Alert
                        severity="error"
                        variant="filled"
                        onClose={handleClose}
                    >
                        Send Fail!
                    </Alert>
                </Snackbar>
            }
        </>
    )
}

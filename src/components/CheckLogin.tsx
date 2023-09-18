import Button from '@mui/material/Button';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Login, useLogin } from './useLogin';
import { CheckLoginProps } from './CustomProps';

export function CheckLogin({ open, handleClose, profile }: CheckLoginProps) {
    const { login, logOut } = useLogin();

    return (
        <Login open={open} handleClose={handleClose}>
            <DialogTitle className='custom_dialog_text'>
                Request to sign {profile ? 'out' : 'in'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText className='custom_dialog_text'>
                    {profile ? 'Are you sure to sign out?' : 'You must Login to use this feature.'}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {
                    profile ?
                        <Button className='custom_btn' onClick={() => { logOut(); handleClose() }} autoFocus>
                            Sign Out
                        </Button>
                        :
                        <Button className='custom_btn' onClick={() => { login(); handleClose() }} autoFocus>
                            Sign In
                        </Button>
                }
                <Button className='custom_btn' onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Login>
    );
}
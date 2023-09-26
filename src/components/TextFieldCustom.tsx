import { TextField } from "@material-ui/core";
import { TextFieldProps } from "./CustomProps";

export default function TextFieldCustom({ givenName, email, isVerified }: TextFieldProps) { //Restrict Props(Có prop này thì ko dc có prop kia => truyền name rồi thì k dc truyền thêm email)
    return (
        <>
            {isVerified ?
                <TextField
                    className="custom_text_field"
                    variant='outlined'
                    label={givenName ? 'Name' : 'Email'}
                    disabled
                    fullWidth
                    value={givenName || email}
                /> :
                <TextField
                    className="custom_text_field error"
                    variant='outlined'
                    label={'???'}
                    disabled
                    fullWidth
                    error={true}
                    value={'Account not verified'}
                />
            }
        </>
    )
}

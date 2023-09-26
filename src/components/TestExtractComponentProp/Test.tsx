import React from 'react'
import TextFieldCustom from '../TextFieldCustom'

export const Test = (props: React.ComponentProps<typeof TextFieldCustom>) => { //Extract TextFieldCustom Props
    return (
        <div>Welcome {props.givenName}</div>
    )
}

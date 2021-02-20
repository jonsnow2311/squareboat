import React, { Component } from 'react';
import {Typography , TextField, Button} from '@material-ui/core';


export default class ForgetPasswordForm extends Component {
    render() {
        return (
            <div>
                <Typography variant="h6">Forget Your Password?</Typography>
                <Typography variant="body1">
                    Enter the email associated with your account and we’ll send you instructions to reset your password.
                </Typography>
                <TextField label="Email" variant="outlined" type="email" />
                <Button variant="contained">Submit</Button>
            </div>
        )
    }
}

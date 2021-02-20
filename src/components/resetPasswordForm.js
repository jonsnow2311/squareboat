import React, { Component } from 'react';
import {Typography , TextField, Button} from '@material-ui/core';


export default class ResetPasswordForm extends Component {
    render() {
        return (
            <div>
                <Typography variant="h6">Reset Your Password?</Typography>
                <Typography variant="body1">
                    Enter your new Password below.
                </Typography>
                <TextField label="Password" variant="outlined" type="password" />
                <TextField label="Confirm Password" variant="outlined" type="password" /> 
                <Button variant="contained">Reset</Button>
            </div>
        )
    }
}

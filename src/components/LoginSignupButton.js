import React, { Component } from 'react';
import {Button} from '@material-ui/core';

export default class LoginSignupButton extends Component {
    render() {
        return (
            <div>
                <Button color="primary" variant="outlined" onClick={this.props.whenClicked} >login/signup</Button>
            </div>
        )
    }
}

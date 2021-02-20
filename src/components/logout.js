import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export default class Logout extends Component {
    render() {
        return (
            <div>
                <Button variant="outlined" onClick={this.props.logoutClicked}>Logout</Button>
            </div>
        )
    }
}

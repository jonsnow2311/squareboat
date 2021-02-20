import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export default class PostJob extends Component {
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.props.postJobClick}>Post a Job</Button>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export default class AppliedJobs extends Component {
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.props.appliedJobsClick}>Applied Job</Button>
            </div>
        )
    }
}

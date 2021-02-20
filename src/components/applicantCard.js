import React, { Component } from 'react';
import { Paper , Typography } from '@material-ui/core';

export default class ApplicantCard extends Component {
    render() {
        return (
            <div>
                <Paper elevation={6}>
                    <Typography variant="h4">{this.props.applicantDetails.name}</Typography>
                    <Typography variant="h6">{this.props.applicantDetails.email}</Typography>
                    <Typography variant="body1">{this.props.applicantDetails.skills}</Typography>
                </Paper>
            </div>
        )
    }
}

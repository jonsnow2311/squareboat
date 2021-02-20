import React, { Component } from 'react';
import {Typography , Paper} from '@material-ui/core';

export default class RecruiterApplicantCard extends Component {
    render() {
        return (
            <div>
                <Paper elevation={5}>
                    <Typography variant="h5">{this.props.applicantDetails.name}</Typography>
                    <Typography variant="body1">{this.props.applicantDetails.email}</Typography>
                    <Typography variant="caption">{this.props.applicantDetails.skills}</Typography>
                </Paper>
            </div>
        )
    }
}

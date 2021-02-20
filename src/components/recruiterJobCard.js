import { Button, Paper, Typography } from '@material-ui/core'
import React, { Component } from 'react';
import { getApplicants } from '../services/recruiterService';
import { getUserData } from '../services/profileService';

export default class RecruiterJobCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicants: []
        }
    }
    callApplicants = () => {
        this.props.showApplicants(this.props.jobDetails.id);
    }
    render() {
        return (
            <div>
                <Paper elevation={5}>
                    <Typography variant="h5">{this.props.jobDetails.title}</Typography>
                    <Typography variant="body1">{this.props.jobDetails.description}</Typography>
                    <Typography variant="caption">{this.props.jobDetails.location}</Typography>
                    <Button variant="outlined" onClick={this.callApplicants}>View Applications</Button>
                </Paper>
            </div>
        )
    }
}

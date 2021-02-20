import React, { Component } from 'react';
import {Typography , Button , Paper} from '@material-ui/core';

export default class CandidateJobCard extends Component {
    apply = () => {
        this.props.applyJob(this.props.jobDetails.id);
    }
    render() {
        return (
            <div>
                <Paper elevation={5}>
                    <Typography variant="h5">{this.props.jobDetails.title}</Typography>
                    <Typography variant="body1">{this.props.jobDetails.description}</Typography>
                    <Typography variant="caption">{this.props.jobDetails.location}</Typography>
                    <Button variant="outlined" onClick={this.apply}>Apply</Button>
                </Paper>
            </div>
        )
    }
}

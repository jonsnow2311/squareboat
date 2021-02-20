import { Paper, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class AppliedJobCard extends Component {
    render() {
        return (
            <div>
                <Paper elevation={6}>
                    <Typography variant="h5">{this.props.jobDetails.title}</Typography>
                    <Typography variant="body1">{this.props.jobDetails.description}</Typography>
                    <Typography variant="caption">{this.props.jobDetails.location}</Typography>
                </Paper>
            </div>
        )
    }
}

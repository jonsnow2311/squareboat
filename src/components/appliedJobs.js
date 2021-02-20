import React, { Component } from 'react';
import AppliedJobCard from './appliedJobCard';
import { getAppliedJobs } from '../services/candidateService';
import { getUserData } from '../services/profileService';

export default class AppliedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appliedJobs: []
        }
    }
    componentDidMount() {
        getAppliedJobs(getUserData().token)
        .then( response => {
            console.log(response);
            this.setState({
                appliedJobs: response.data
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.appliedJobs.map( (job) => 
                    <AppliedJobCard key={job.id} jobDetails={job} />
                )}
            </div>
        )
    }
}

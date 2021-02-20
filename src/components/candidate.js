import React, { Component } from 'react';
import Logout from './logout';
import ShowAppliedJobs from './showAppliedJobs';
import CandidateJobCard from './candidateJobCard';
import {getAllJobs , applyJob} from '../services/candidateService';
import {getUserData} from '../services/profileService';

export default class Candidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    }
    componentDidMount() {
        getAllJobs(getUserData().token)
        .then( response => {
            //console.log(response);
            this.setState({
                jobs: response.data
            });
            //console.log(this.state.jobs);
        });
    }
    showAllJobs = () => {
        console.log("inside show all");
        getAllJobs(getUserData().token)
        .then( response => {
            console.log(response);
            this.setState({
                jobs: response.data
            });
            //console.log(this.state.jobs);
        });
    }
    handleApply = (jobid) => {
        let body = {
            jobId: jobid
        }
        applyJob (getUserData().token , body)
        .then( response => {
            //console.log(response);
            this.showAllJobs();
        });
    }
    
    render() {
        return (
            <div>
                <ShowAppliedJobs appliedJobsClick={this.props.appliedJobsClick} />
                <Logout logoutClicked={this.props.logout} />
                {this.state.jobs.map( (job) => 
                    <CandidateJobCard key={job.id} jobDetails={job} applyJob={this.handleApply} />
                )}
            </div>
        )
    }
}

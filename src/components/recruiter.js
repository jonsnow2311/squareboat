import React, { Component } from 'react';
import PostJob from './postJob';
import Logout from './logout';
import RecruiterJobCard from './recruiterJobCard';
import {getPostedJobs} from '../services/recruiterService';
import {getUserData} from '../services/profileService';

export default class Recruiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    }
    componentDidMount() {
        getPostedJobs(getUserData().token)
        .then( response => {
            //console.log(response.data);
            if(response.data)
            {
                this.setState({
                    jobs: response.data.data
                });
            }
            //console.log(this.state.jobs);
        });
    }
    render() {
        return (
            <div>
                <PostJob postJobClick={this.props.postJobClick} />
                <Logout logoutClicked={this.props.logout} />
                {this.state.jobs.map( (job) =>
                    <RecruiterJobCard key={job.id} jobDetails={job} showApplicants={this.props.showApplicants} />
                )}
            </div>
        )
    }
}

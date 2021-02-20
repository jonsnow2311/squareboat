import React, { Component } from 'react'
import { getUserData } from '../services/profileService';
import Recruiter from '../components/recruiter';
import Candidate from '../components/candidate';
import { logout } from '../services/loginService';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        let userData =getUserData();
        this.state = {
            email: userData.email,
            name: userData.name,
            skills: userData.skills,
            token: userData.token,
            userRole: userData.userRole,
            id: userData.id
        }
    }
    componentDidMount () {
        let userData =getUserData();
        console.log(this.state.email);
    }
    handleJobPost = () => {
        this.props.history.push("/postJob");
    }
    logout = () => {
        logout();
        this.props.history.replace("/home");
    }
    showAppliedJobs = () => {
        this.props.history.push("/applied");
    }
    showApplicants = (id) => {
        this.props.history.push(`/applicants/${id}`);
    }
    render() {
        return (
            <>
            {this.state.userRole === 0 ? 
            <Recruiter postJobClick={this.handleJobPost} logout={this.logout} showApplicants={this.showApplicants} />
            :
            <Candidate appliedJobsClick={this.showAppliedJobs} logout={this.logout} />}
            </>
        )
    }
}

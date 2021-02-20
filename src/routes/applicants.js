import React, { Component } from 'react';
import { getApplicants } from '../services/recruiterService';
import { getUserData } from '../services/profileService';
import ApplicantCard from '../components/applicantCard';

export default class Applicants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicants: []
        }
    }
    componentDidMount() {
        getApplicants(getUserData().token , this.props.match.params.id)
        .then( response => {
            if(response.data)
            {
                this.setState({
                    applicants: response.data
                });
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.applicants.map((applicant) => 
                    <ApplicantCard key={applicant.id} applicantDetails={applicant} />
                )}
            </div>
        )
    }
}

import React, { Component } from 'react';
import PostJobForm from '../components/postJobForm';
import { postJob } from '../services/recruiterService';
import { getUserData } from '../services/profileService';

export default class PostJob extends Component {
    handlePost = (jobData) => {
        postJob(getUserData().token , jobData)
        .then( response => {
            console.log(response);
            this.props.history.push("/profile");
        }
        )
    }
    render() {
        return (
            <div >
                <PostJobForm handlePost={this.handlePost}/>
            </div>
        )
    }
}

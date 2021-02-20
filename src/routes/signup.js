import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import { signupPost , saveUser } from '../services/signupService';

export default class Signup extends Component {
    handleSignup = (Data) => {
        signupPost(Data)
        .then( response => {
            console.log(response);
            if(response.code === 201)
            {
                saveUser(response.data);
                this.props.history.push("/login");
            }
        });
    }
    render() {
        return (
            <div>
                <SignupForm handleSubmit={this.handleSignup} />
            </div>
        )
    }
}

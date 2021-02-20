import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import {loginPost , saveUser } from '../services/loginService';

export default class Login extends Component {
    handleLogin = (data) => {
        loginPost(data)
        .then( response => {
            //console.log(response);
            if(response.code === 200)
            {
                saveUser(response.data);
                this.props.history.push("/profile");
            }
        });
    }
    render() {
        return (
            <div>
                <LoginForm handleLogin={this.handleLogin} />
            </div>
        )
    }
}

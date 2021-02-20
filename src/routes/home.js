import React, { Component } from 'react';
import LoginSignupButton from '../components/LoginSignupButton';

export default class Home extends Component {
    loginsignup = () => {
        this.props.history.push("/login");
    }
    render() {
        return (
            <div>
                <LoginSignupButton whenClicked={this.loginsignup} />
            </div>
        )
    }
}

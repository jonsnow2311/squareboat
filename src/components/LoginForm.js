import React, { Component } from 'react';
import { FormControlLabel , Radio , FormLabel , RadioGroup , TextField , Button , Typography , Link} from '@material-ui/core';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = (event) => {
        //console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick = () => {
        this.props.handleLogin(this.state);
    }
    render() {
        return (
            <div style={{ display: 'flex' , flexDirection: 'column'}}>
                <Typography variant="h4">Login</Typography>
                <TextField label="Email" variant="outlined" type="email" name="email" onChange={this.handleChange} /> 
                <TextField label="Password" variant="outlined" type="password" name="password" onChange={this.handleChange}/>
                <Typography variant="h6">
                    <Link href="/forgetpassword" >
                        Forget Password
                    </Link>
                </Typography>
                <Button onClick={this.handleClick} variant="contained">Login</Button>
                <Typography variant="h6">
                    <Link href="/signup" >
                        Create Account
                    </Link>
                </Typography>
            </div>
        )
    }
}

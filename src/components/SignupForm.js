import React, { Component } from 'react';
import { FormControlLabel , Radio , FormLabel , RadioGroup , TextField , Button , Link , Typography} from '@material-ui/core';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            userRole: 0,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            skills: ""
        }
    }
    handleChange = (event) => {
        //console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleTypeChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            userRole: parseInt(event.target.value)
        })
    }
    handleClick = () => {
        //console.log(parseInt(this.state.type));
        console.log(this.state.userRole);
        //console.log(this.state);
        this.props.handleSubmit(this.state);
    }
    render() {
        return (
            <div>
                <div style={{display: 'flex' , flexDirection: 'column'}}>
                    <Typography variant="h4">Register</Typography>
                    <FormLabel>I'm a</FormLabel>
                    <RadioGroup name="type" value={this.state.type} onChange={this.handleTypeChange}>
                        <FormControlLabel value="0" control={<Radio />} label="Recruiter" />
                        <FormControlLabel value="1" control={<Radio />} label="Candidate" />
                    </RadioGroup>
                    <TextField label="Full Name" name="name" variant="outlined" onChange={this.handleChange}/>
                    <TextField label="Email" name="email" variant="outlined" type="email" onChange={this.handleChange}/> 
                    <TextField label="Password" name="password" variant="outlined" type="password" onChange={this.handleChange}/> 
                    <TextField label="Confirm Password" name="confirmPassword" variant="outlined" type="password" onChange={this.handleChange}/> 
                    <TextField label="Skills" name="skills" variant="outlined" onChange={this.handleChange}/>
                    <Button onClick={this.handleClick} variant="contained">Sign Up</Button>
                    <Typography variant="h6">
                        <Link href="/login" >
                            Login
                        </Link>
                    </Typography>
                </div>
            </div>
        )
    }
}

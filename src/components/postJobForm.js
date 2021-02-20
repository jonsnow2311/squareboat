import React, { Component } from 'react';
import {TextField, Typography , Button} from '@material-ui/core';

export default class PostJobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            location: ""
        }
    }
    handleChange = (event) => {
        //console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick = () => {
        this.props.handlePost(this.state);
    }
    render() {
        return (
            <div style={{ display: 'flex' , flexDirection: 'column'}}>
                <Typography variant="h4">Post a Job</Typography>
                <TextField label="Job Title" variant="outlined" name="title" onChange={this.handleChange} /> 
                <TextField label="Description" multiline rows={3} variant="outlined" name="description" onChange={this.handleChange}/>
                <TextField label="Location" variant="outlined" name="location" onChange={this.handleChange}/>
                <Button variant="outlined" onClick={this.handleClick}>Post</Button>
            </div>
        )
    }
}

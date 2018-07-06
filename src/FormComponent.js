import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css';
import PropTypes from 'prop-types'


class FormComponent extends Component{
    state = {
        name : '',
        email : ''
    }   
    upadateName = name => {
        this.setState({
            name
        })
    }
    upadateEmail = email => {
        this.setState({
            email
        })
    }
    handleSubmit = (e) =>{
        let data = {
            name : this.state.name,
            email : this.state.email
        }
        this.props.onSubmitClick(data)
    }
    render(){
        return (
            <div className="login-wrap">
            <h2>Simple Form</h2>
            <div className="form">
                <input type="text" placeholder="Username" name="un" value = {this.state.name} onChange = {(event) => this.upadateName(event.target.value)} style={{color : 'black'}}/>
                <input type="email" placeholder = "Enter your email" value = {this.state.email} onChange = {(event) => this.upadateEmail(event.target.value)} style={{color : 'black'}}/>
                <Link onClick = {this.handleSubmit} className = "submit-button" to="/profile" > submit </Link>
            </div>
            </div>
        )
    }
}

FormComponent.propTypes = {
    onSubmitClick : PropTypes.func.isRequired
}

export default FormComponent
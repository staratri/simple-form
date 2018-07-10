import React, { Component } from 'react';
import './Reflector.css';
import CardInputComponent from './CardInputComponent'
// import PropTypes from 'prop-types'
import ReflectorCardComponent from './ReflectorCardComponent';
export default class ReflectorComponent extends Component{
    state = {
        headLine : '',
        tagLine : '',
        date : '',
        month : ''
    }
    dataFiller = (data) =>{
        this.setState({
            headLine : data.headLine,
            tagLine : data.tagLine,
            date : data.date,
            month : data.month
        })
    }
    render(){
        return (
            <div className="container">
                <CardInputComponent dataFilling = {
                    this.dataFiller
                }/>
                <ReflectorCardComponent dataVals = {this.state} />
            </div>
        )
    }
}
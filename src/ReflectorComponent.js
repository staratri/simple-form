import React, { Component } from 'react';
import './Reflector.css';
import CardInputComponent from './CardInputComponent'
import PropTypes from 'prop-types'
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
        console.log(this.state)
    }
    render(){
        return (
            <div className="container">
                <CardInputComponent dataFilling = {data =>{
                    this.dataFiller(data)
                }}/>
            </div>
        )
    }
}
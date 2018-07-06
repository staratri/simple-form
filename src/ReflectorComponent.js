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
                <div className="column">
                    <div className="post-module">
                        <div className="thumbnail">
                            <div className="date">
                            <div className="day">{this.state.date}</div>
                            <div className="month">{this.state.month}</div>
                            </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                        </div>
                    
                        <div className="post-content">
                            <div className="category">Photos</div>
                            <h1 className="title">{this.state.headLine}</h1>
                            <h2 className="sub_title">{this.state.tagLine}</h2>
                            <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                            <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-">o</i> 6 mins ago</span><span className="comments"><i className="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
                        </div>
                    </div>
                </div>
                <CardInputComponent dataFilling = {data =>{
                    this.dataFiller(data)
                }}/>
            </div>
        )
    }

}
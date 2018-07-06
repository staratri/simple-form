import React, { Component } from 'react';
import './Reflector.css';
import CardInputComponent from './CardInputComponent'
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
            <div class="container">
                <div class="column">
                    <div class="post-module">
                        <div class="thumbnail">
                            <div class="date">
                            <div class="day">27</div>
                            <div class="month">Mar</div>
                            </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                        </div>
                    
                        <div class="post-content">
                            <div class="category">Photos</div>
                            <h1 class="title">City Lights in New York</h1>
                            <h2 class="sub_title">The city that never sleeps.</h2>
                            <p class="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                            <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
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
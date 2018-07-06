import React, { Component } from 'react';

export default class CardInputComponent extends Component {

    state = {
        headLine : '',
        tagLine : '',
        date : '',
        month : '',
    }

    upadateHeadLine = (val) =>{
        this.setState({
            headLine : val
        })
    }
    upadateTagLine = (val) =>{
        this.setState({
            tagLine : val
        })
    }
    upadateDate= (val) => {
        this.setState({
            date : val
        })
    }
    upadateMonth = (val) =>  {
        this.setState({
            month : val
        })
    }
    UpdateReflectorState = (state) =>{
        this.props.dataFilling(state)
    }


    render(){
        return (
            <div className= "shade">
                <div className= "blackboard">
                        <div className= "form">
                                <p>
                                        <label>Main HeadLine: </label>
                                        <input type="text"  value = {this.state.headLine} onChange ={(event) => this.upadateHeadLine(event.target.value)}/>
                                </p>
                                <p>
                                        <label>Tag Line: </label>
                                        <input type="text" value={this.state.tagLine}  onChange =  {(event) => this.upadateTagLine(event.target.value)}/>
                                </p>
                                <p>
                                        <label>Date: </label>
                                        <input type="text" value = {this.state.date}  onChange =  {(event) => this.upadateDate(event.target.value)}/>
                                </p>
                                <p>
                                        <label>Month: </label>
                                        <input type="text" value= {this.state.month}  onChange =  {(event) => this.upadateMonth(event.target.value)}/>
                                </p>
                                <p className="wipeout">
                                    <input type="submit" value="Send" onClick = {() => this.UpdateReflectorState(this.state)}/>
                                </p> 
                                
                        </div>
                </div>
            </div>
        );
    }
}
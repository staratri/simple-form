import React, { Component } from 'react';
import FormComponent from './FormComponent'
import {Route} from 'react-router-dom'
import ProfileComponent from './ProfileComponent'
import ReflectorComponent from './ReflectorComponent';
import { Redirect } from 'react-router-dom';


class App extends Component {
  
  state = {
    data :{
      name : '',
      email : ''
    },
    auth : false
  }
  updateState = (data) =>{
    this.setState(
      {data : data}
    )
  }
  
  render() {
    
    return (
      <div className="App">
        <Route exact path="/" render={()=>(
          <FormComponent onSubmitClick= {this.updateState}/>
        )}/>
        {
          this.state.auth === true && <Route exact path="/profile" render = {({history}) =>
            <ProfileComponent info = {this.state.data}/>
          }/>
        }
        
        <Route exact path="/reflector" render = {({history}) =>
          <ReflectorComponent />
        }/>
        
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import FormComponent from './FormComponent'
import {Route} from 'react-router-dom'
import ProfileComponent from './ProfileComponent'
// import ReflectorComponent from './ReflectorComponent';


class App extends Component {
  
  state = {
    data :{
      name : '',
      email : ''
    }
  }
  
  render() {
    
    return (
      <div className="App">
        <Route exact path="/" render={()=>(
          <FormComponent onSubmitClick= {data => this.setState({data})}/>
        )}/>
        <Route exact path="/profile" render = {({history}) =>
          <ProfileComponent info = {this.state.data}/>
        }/>
        
      </div>
      
    );
  }
}

export default App;

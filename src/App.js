import React, { Component } from 'react';
import FormComponent from './Form'


class App extends Component {
  
  state = {
    data :{
      name : '',
      email : ''
    }
  }
  
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <FormComponent onSubmitClick= {data => this.setState({data})}/>
      </div>
      
    );
  }
}

export default App;

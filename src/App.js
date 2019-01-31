import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor'
import Previewer from './components/Previewer'

class App extends Component {

  state ={
    markup: ''
  }

  inputHandler = (e) => {
   
    this.setState({
      markup: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
         <div className="col-10 mx-auto col-md-6">
           <Editor markup={this.state.markup}
                   inputHandler ={this.inputHandler}
           />
         </div>
         <div className="col-10 mx-auto col-md-6">
          <Previewer markup={this.state.markup}/>
         </div>
        </div>
      </div>
    );
  }
}

export default App;

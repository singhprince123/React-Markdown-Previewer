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
      <React.Fragment>
         <div className="Header text-capitalize text-center  p-2">react markdown previewer</div>
         <div className="container">
       
       <div className="row">
        <div className="col-10 mx-auto col-md-6 ">
          <Editor markup={this.state.markup}
                  inputHandler ={this.inputHandler}
          />
           
        </div>
         <div className="col-10 mx-auto col-md-6 my-4">
          <Previewer markup={this.state.markup}/>
          
        </div>
        
       </div>
     </div>
      </React.Fragment>
     
    );
  }
}

export default App;

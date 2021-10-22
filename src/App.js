import "./App.css";
import React from 'react'
import Keypad from './component/Keypad.js'
import Result from './component/Result.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      result:""
    }
  }
  buttonPressed = buttonName => {
    if(buttonName === "="){
      this.calculate()
    } else if(buttonName === "C"){
      this.reset()
    } else if(buttonName === "CE"){
      this.backspace()
    } else {
      this.setState({
        result : this.state.result + buttonName
      })
    }
  }
  calculate = () => {
    try{
      this.setState({
        result: eval(this.state.result)
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  }
  reset = () => {
    this.setState({
      result: ''
    })
  }
  backspace = ()=>{
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  }
  render(){
    return (
      <div className="App">
        <FontAwesomeIcon className="icon" icon={faGhost} />
        <div className="calc">
        
          <h1>Try on some Math! <br />
          Happy Halloween!
          </h1>
          <Result result={this.state.result}/>
        <Keypad buttonPressed={this.buttonPressed}/>
        </div>
      </div>
      
    );
    <Keypad />
  }
}

export default App;

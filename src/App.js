import React, { Component } from 'react';
import './App.css';
// credit : https://cssgradient.io
//credit: https://superdevresources.com/glassmorphism-ui-css/
// credit: https://hype4.academy/tools/glassmorphism-generator



class App extends Component {
  constructor() {
    super();

    this.state={
        number:0
    };

}

add=()=>{
     this.setState({number:this.state.number+1});
}
sub=()=>{
    this.setState({number:this.state.number-1});
}


  render() {
    return (
      <div className="parent">
      <div className="childglass">
        <div className="text"><h1>COUNTER APP</h1></div>
        <div className="h">
        <div className="num">{this.state.number}</div></div>
        <div className="asbtn">
          <button onClick={this.add} className="add">ADD1</button>
          <button onClick={this.sub} className="sub">SUB1</button>
        </div>
      </div>
    </div>
    );
  }
}



export default App;

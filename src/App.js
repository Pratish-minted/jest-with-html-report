import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.callCaptain = this.callCaptain.bind(this);

    this.state = {
      callingNumber: '',
      showRightDiv: false
    };
  }

  handleChange(e){
    try{
      this.setState({
        callingNumber: e.target.value
      })
    }
    catch(e){
      throw new Error("Event is required");
    }
  }

  callCaptain(e){
    e.preventDefault();
    if(this.state.callingNumber.trim().length >=10){
      this.setState({
        showRightDiv: true
      });
    }
  }


  render(){
    const headerStyle={
      "textAlign": "center",
      "marginTop": "20px"
    }

    const divStyle =  {
      "float": "left",
      "width": "33.18%",
      "border": "1px solid #796d6d",
      "height": "250px",
      "marginTop": "90px",
      "borderTopWidth": "0px",
      "borderBottomWidth": "0px",
      "textAlign":"center"
  }

  const labelStyle={
    "display": "block",
    "fontSize": "30px",
    "marginTop": "48px"
  }

  const inputStyle={
    "height": "30px",
    "width": "90%",
    "marginTop": "23px",
    "textAlign": "center",
    "fontSize": "20px"
  }

  const buttonStyle={
    "padding": "12px",
    "width": "150px",
    "fontSize": "20px"
  }
  


    return(
        <div>
          <h1 style={headerStyle}>Jest with HTML Reporter</h1>;
          <hr/>
          <div className="left-div" style={divStyle}>
            <h2>Thanos has come!</h2>
            <h3>Need to find Vision</h3>
            <h1>CALL</h1>
            <h1>The Captain</h1>
          </div>
          <div className="middle-div" style={divStyle}>
            <form>
              <label htmlFor="call-to" style={labelStyle}>Enter the Number to call Captain</label>
              <input type="text" id="call-to" style={inputStyle} value={this.state.callingNumber} onChange={this.handleChange}/>
              <br/><br/>
              <button style={buttonStyle} onClick={this.callCaptain}>CALL</button>
            </form>
          </div>
          {
            this.state.showRightDiv && <div className="right-div" style={divStyle }>
            <h4>Tring!!!</h4>
            <h3>Tring!!!</h3>
            <h2>Tring!!!</h2>
            <h1>Tring!!!</h1>
          </div>
          }
        </div>
    );
  }
}

export default App;
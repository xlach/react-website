import React, { Component } from 'react';
import './App.css';
import GetCode from './components/getCode';
import GetDate from './components/getDate';
import GetDay from './components/getDay';
import GetSchedule from './components/getSchedule';
import GetVarient from './components/getVarient';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  };

  render() {
    return (
      <div className="App">
        <div className="DateBar">
          <p>
            <div className="DateText"><GetDate /></div>
            <div className="CodeText"><GetCode /> - <GetVarient /></div>
            <div className='CenterText'>Dashboard</div>
          </p>
        </div>

        <div className="scheduleBlock">
          <span style={{ "float": "left", "display": "flex", "marginLeft": "13px", "marginTop": "5px", "fontSize": "12px" }}>
            <GetDay />
          </span>
          <span style={{ "float": "right", "display": "flex", "marginRight": "15px", "marginTop": "5px", "fontSize": "35px" }}>
            <GetCode />
          </span>
          <br />
          <span style={{ "marginLeft": "13px", "display": "flex", "fontSize": "25px", "marginBottom": "4px" }}>
            {new Date().getDate()}
          </span>
          <GetSchedule />
          <hr />
        </div>
        <div className="App-header">
        </div>
      </div>
    );
  }
}

export default App;
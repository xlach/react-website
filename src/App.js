import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetSchedule from './components/getSchedule';
import GetDate from './components/getDate';

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
            <div className="CodeText"><GetSchedule /></div>
            <div className='CenterText'>Dashboard</div>
          </p>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';
import MobilePlanOff from './components/mobilePlanOff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>mobile app</h1>
        <div className="controls">
          <Commitment />
          <HaveServices />
        </div>
        <main className="plan-cards">
          <MobilePlan />
          <MobilePlanOff />
        </main>
      </div>
    );
  }
}

export default App;

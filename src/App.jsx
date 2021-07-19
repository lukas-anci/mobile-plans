import React, { Component } from 'react';

import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';
import MobilePlanOff from './components/mobilePlanOff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noCommitment: false,
    };
  }

  handleRadio = (val) => {
    console.log('radio was pressed');
    console.log(val);
    // jei gaunu commit nustattau busena i atitinkama

    // arba priesingai
    if (val === 'commit') {
      this.setState({ noCommitment: false });
    } else {
      this.setState({ noCommitment: true });
    }
  };

  render() {
    return (
      <div className="App ">
        <div className="container">
          <h1>mobile app</h1>
          <div className="controls d-flex">
            <Commitment
              handleRadio={this.handleRadio}
              noCommitment={this.state.noCommitment}
            />
            <HaveServices />
          </div>
          <main className="plan-cards">
            {/* <MobilePlan /> */}
            <MobilePlanOff />
          </main>
        </div>
      </div>
    );
  }
}

export default App;

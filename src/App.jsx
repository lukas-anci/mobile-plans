import React, { Component } from 'react';

import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';
import MobilePlanOff from './components/mobilePlanOff';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noCommitment: false,
      mobile1: {},
    };
  }

  async componentDidMount() {
    // fetch plan1 json faila ir issaugot state kaip mobile1
    // perduot mobile 1 i mobile plan kaip propsa ir prasukt ciklelei

    try {
      const { data: resultAxios } = await axios.get('/data/plan1.json');
      const res = await fetch('/data/plan1.json');

      const data = await res.json();

      console.log(data);
      console.log(resultAxios);
      this.setState({ mobile1: resultAxios });
    } catch (err) {
      console.log(err);
    }
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
            <MobilePlanOff mobile={this.state.mobile1} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;

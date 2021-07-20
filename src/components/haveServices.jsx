import React, { Component } from 'react';
import './haveServices.css';

class HaveServices extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex">
        <label className="switch">
          <input onClick={this.props.haveService} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>
          Turite „Telia“ namų paslaugų? Gausite dar daugiau GB su Telia1.
        </span>
      </div>
    );
  }
}

export default HaveServices;

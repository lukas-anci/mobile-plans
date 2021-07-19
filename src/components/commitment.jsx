import React, { Component } from 'react';
import CustomRadio from './common/customRadio';
class Commitment extends Component {
  handleRadio = () => {
    console.log('radio was pressed');
  };

  render() {
    return (
      <div className="commitment-component">
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio
              checked={!this.props.noCommitment}
              onClick={this.handleRadio}
            >
              24 men
            </CustomRadio>
          </span>
        </div>
        <div className="c__selection">
          <CustomRadio
            checked={this.props.noCommitment}
            onClick={this.handleRadio}
          >
            Be isipareigojimu
          </CustomRadio>
        </div>
      </div>
    );
  }
}

export default Commitment;

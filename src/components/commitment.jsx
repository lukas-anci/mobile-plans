import React, { Component } from 'react';
import CustomRadio from './common/customRadio';
class Commitment extends Component {
  render() {
    return (
      <div className="commitment-component">
        <div className="c__selection">
          <CustomRadio
            value="commit"
            checked={!this.props.noCommitment}
            onClick={this.props.handleRadio}
          >
            24 men
          </CustomRadio>
        </div>
        <div className="c__selection">
          <CustomRadio
            value="noCommit"
            checked={this.props.noCommitment}
            onClick={this.props.handleRadio}
          >
            Be isipareigojimu
          </CustomRadio>
        </div>
      </div>
    );
  }
}

export default Commitment;

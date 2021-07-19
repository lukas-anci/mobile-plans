import React, { Component } from 'react';
class MobilePlan extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <h6>Mobilus start</h6>
        <h4>1 GB</h4>
        <h6>Is ju 1gb EE/EES</h6>
        <h6>Neribotos sms </h6>

        <ul>
          <li>M. parašas (6 mėn.)</li>
          <li>Įrangos draudimas (3 mėn.)</li>
        </ul>
        <div className="card-bottom">
          <div className="price">9,00 €/mėn. 24 mėn. sutartis</div>
          <div className="button">
            <button>Gauti pasiulyma</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MobilePlan;

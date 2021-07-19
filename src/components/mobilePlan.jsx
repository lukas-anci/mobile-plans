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
          <li>
            {' '}
            <i class="fa fa-check"></i> M. parašas (6 mėn.)
          </li>
          <li>
            {' '}
            <i class="fa fa-check"></i> Įrangos draudimas (3 mėn.)
          </li>
        </ul>
        <div className="card-bottom">
          <div className="price">
            9,00 €/mėn. <br /> 24 mėn. sutartis
          </div>
          <div className="button">
            <button>Domina</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MobilePlan;

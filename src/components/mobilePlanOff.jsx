import React, { Component } from 'react';
import ListImage from '../static/checked.png';
class MobilePlanOff extends Component {
  state = {};
  render() {
    return (
      <div className="mobile-plan">
        <h6 className="plan__header">Mobilus START 1</h6>
        <h2 className="plan__dataAllow">1 GB</h2>
        <small className="plan__dataEu">Iš jų 1 GB ES/EEE</small>
        <p className="plan__min-sms">Neribotos MIN ir SMS</p>
        <div className="plan__features">
          <div className="hr"></div>
          <ul className="features__list">
            <li>
              {' '}
              <img className="features__check" src={ListImage} alt="" />{' '}
              <span>M. parašas (6 mėn.)</span>
            </li>
            <li>
              {' '}
              <img className="features__check" alt="" src={ListImage} />
              <span> Įrangos draudimas (3 mėn.)</span>
            </li>
          </ul>
          <div className="hr"></div>
        </div>
        <div className="plan__bottom">
          <div className="bottom__price-part">
            <h3 className="botton__price">
              9,00 <span>€/mėn.</span>
            </h3>
            <small className="bottom__term">24 mėn. sutartis</small>
          </div>
          <button className="plan__cta">Domina</button>
        </div>
      </div>
    );
  }
}

export default MobilePlanOff;

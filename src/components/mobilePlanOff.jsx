import React, { Component } from 'react';
import ListImage from '../static/checked.png';
class MobilePlanOff extends Component {
  state = {};
  formatPrice(num) {
    return num?.toFixed(2);
  }
  render() {
    const { mobile: p } = this.props;
    return (
      <div className="mobile-plan">
        <h6 className="plan__header">{p.headerTitle}</h6>
        {!this.props.haveServiceState ? (
          <h2 className="plan__dataAllow">{p.dataAlowed} GB</h2>
        ) : (
          <div className="plan__discount">
            <h2 className="plan__dataAllows">{p.dataAlowed} GB</h2>
            <h2 className="plan__dataServices">{p.dataServices} GB</h2>
          </div>
        )}

        <small className="plan__dataEU">Iš jų {p.dataEU} GB ES/EEE</small>
        <p className="plan__min-sms">{p.minSms}</p>
        <div className="plan__features">
          <div className="hr"></div>
          <ul className="features__list">
            {p.features?.length > 0 &&
              p.features.map((f) => (
                <li key={f.title}>
                  <img
                    className="features__check"
                    src={ListImage}
                    alt="check"
                  />
                  <span>{f.title}</span>
                </li>
              ))}
          </ul>
          <div className="hr"></div>
        </div>
        <div className="plan__bottom">
          <div className="bottom__price-part">
            <h3 className="bottom__price">
              {/* {p.price && p.price.commitment} <span>&euro;/men</span> */}
              {/* p.price? - pasitikrina ar turi reiksme iki ? .commitment */}
              {!this.props.commit
                ? this.formatPrice(p.price?.commitment)
                : this.formatPrice(p.price?.noCommitment)}
              <span>&euro;/{p.period}</span>
            </h3>
            <small className="bottom__term">
              {!this.props.commit
                ? p.contractLength?.commitment
                : p.contractLength?.noCommitment}
            </small>
          </div>
          <button className="plan__cta">{p.ctaButton}</button>
        </div>
      </div>
    );
  }
}
export default MobilePlanOff;

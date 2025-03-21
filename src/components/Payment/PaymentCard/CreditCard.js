import React from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";
import Checkbox from '@mui/material/Checkbox';



import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";
import './style.css';

import "react-credit-cards/es/styles-compiled.css";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default class CreditCard extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control card-input"
                placeholder="Kart Sahibinin Adı"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control card-input"
                placeholder="Kart  nömrəsi"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />

            </div>
            <div className="check_istifade form-group">  <Checkbox {...label} style={{ padding: 0 }} /><p ><span class="text_sartlar">Şərtlər və qaydalar</span> ilə tanış oldum.</p></div>
            <div className="row">
              <div className="col-4">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control card-input"
                  placeholder="Son istifadə tarici"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-4">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control card-input"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />

              </div>
              <div className="col-4">
                <button onClick={() => alert("ödemeniz alındı")} className="form-control color_button card-input">Elə indi ödə</button>
              </div>
            </div>

            {/* <div className="form-actions">
              <button className="btn btn-primary btn-block">PAY</button>
            </div> */}
          </form>

        </div>
      </div>
    );
  }
}


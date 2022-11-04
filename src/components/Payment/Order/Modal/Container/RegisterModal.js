import React , { Component }from 'react';
import '../app.css'
import * as Yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import { RegisterModalComponent } from '../Modal/RegisterModalComponent';
import TriggerButton from '../TriggerButton';

import Container from '.';
const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Zəruri'),
    phone: Yup.number().required('Zəruri'),
    password: Yup.string().min(6).matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/).required('Zəruri'),
    email: Yup.string().email('E-mail ünvanı səhvdir').required('Zəruri'),

});
export class RegisterModal extends Component{
    state = { isShown: false ,value:""};
    showModal = () => {
      this.setState({ isShown: true }, () => {
        this.closeButton.focus();
      });
      this.toggleScrollLock();
    };
  
  
   
    closeModal = () => {
      this.setState({ isShown: false });
      // this.TriggerButton.focus();
      this.toggleScrollLock();
    };
    closeModalSelected = () => {
      this.setState({ isShown: false });
      this.TriggerButton.focus();
      this.toggleScrollLock();
    
    };
    onKeyDown = (event) => {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    };
    onClickOutside = (event) => {
      if (this.modal && this.modal.contains(event.target)) return;
      this.closeModal();
    };
  
    toggleScrollLock = () => {
      document.querySelector('html').classList.toggle('scroll-lock');
    };
    render() {
      
      return (
        <React.Fragment>
      
          <TriggerButton select={this.props.selected}
            showModal={this.showModal}
            buttonRef={(n) => (this.TriggerButton = n)}
            triggerText={this.props.triggerText}
          />
          {this.state.isShown  ? (
            <RegisterModalComponent
             selected={this.props.selected}
              modalRef={(n) => (this.modal = n)}
              buttonRef={(n) => (this.closeButton = n)}
              closeModal={this.closeModal}
              closeModalSelected={this.closeModalSelected}
              onKeyDown={this.onKeyDown}
              onClickOutside={this.onClickOutside}
              setState={this.setState}
            />
          ) :null}
        </React.Fragment>
      );
    }
}

export default RegisterModal;
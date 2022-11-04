import React, { Component } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';

export class Container extends Component {
 
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
          <Modal
           selected={this.props.selected}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            closeModalSelected={this.closeModalSelected}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) :null}
      </React.Fragment>
    );
  }
}

export default Container;

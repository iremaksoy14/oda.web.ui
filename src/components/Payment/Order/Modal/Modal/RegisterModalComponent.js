import React from 'react';
import ReactDOM from 'react-dom';
import { RegisterModalForm } from '../Form/RegisterModalForm';
import FocusTrap from 'focus-trap-react';
export const RegisterModalComponent = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  selected,
  closeModalSelected,
  setState
 
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" style={{width:"50%"}} ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <RegisterModalForm setState={setState}  selected={selected} onClick={closeModal} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default RegisterModalComponent;

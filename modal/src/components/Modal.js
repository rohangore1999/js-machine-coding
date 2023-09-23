import React from "react";

// Styles
import "../index.css";

const Modal = ({ show, onClose }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose}></div>

        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <div className="modal-title">Modal Title</div>
            <div className="modal-close" onClick={onClose}>
              X
            </div>
          </div>

          <div className="modal-body">Modal Body</div>
        </div>
      </>
    )
  );
};

export default Modal;

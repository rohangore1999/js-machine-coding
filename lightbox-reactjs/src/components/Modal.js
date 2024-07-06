import React from "react";

// Styles
import "../index.css";

const Modal = ({ children, show, onClose, title }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose}></div>

        <div className={` -wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <div className="modal-close" onClick={onClose}>
              X
            </div>
          </div>

          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};

export default Modal;

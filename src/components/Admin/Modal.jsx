import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-custom">
        <div className="modal-header-custom">
          <h3>{title}</h3>
          <button onClick={onClose} className="btn-close"></button>
        </div>
        <div className="modal-body-custom">{children}</div>
      </div>
    </>
  );
};

export default Modal;

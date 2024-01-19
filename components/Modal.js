// components/Modal.js
import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Ingrese los detalles de la tarjeta de crédito</h3>
        <button onClick={onClose}>Cerrar Modal</button>
      </div>
    </div>
  );
};

export default Modal;

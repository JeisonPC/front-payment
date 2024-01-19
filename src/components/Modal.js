import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Ingrese los detalles de la tarjeta de crédito</h3>
        <label>Número de tarjeta: <input type='text' /></label>
        <label>Número de cuotas: <input type='text' /></label>
        <label>Mes de vencimiento: <input type='text' /></label>
        <label>Año de vencimiento: <input type='text' /></label>
        <label>CVV: <input type='text' /></label>
        <label>Nombre del titular: <input type='text' /></label>
        <button onClick={onClose}>Cerrar Modal</button>
      </div>
    </div>
  );
};

export default Modal;

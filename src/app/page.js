"use client"
import React, { useState } from 'react';
import Modal from '../components/Modal';

const ProductPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePaymentClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Nombre del Producto</h1>
      <p>Descripción del producto.</p>
      <p>Precio: $XX.XX</p>

      <button onClick={handlePaymentClick}>Pagar con tarjeta de crédito</button>

      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default ProductPage;

"use client"
import React, { useState } from 'react';
import Modal from '@components/Modal';

const CheckoutPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePaymentClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Pagar con Tarjeta de Crédito</h2>
      <button onClick={handlePaymentClick}>Pagar con tarjeta de crédito</button>

      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default CheckoutPage;

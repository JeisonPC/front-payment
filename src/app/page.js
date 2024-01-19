"use client"
import React, { useState } from 'react';
import Modal from '@components/Modal';
import styles from "./page.module.css";


import ProductSlider from '../components/ProductSlider';

const products = [
  { id: 1, image: '/spectre1.png' },
  { id: 2, image: '/spectre1.png'},
];

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

      <h1>Sceptre Monitor curvo para juegos de 24.5 pulgadas</h1>
      <p>$800.000</p>
      <ProductSlider classname={styles.productSlide} products={products} />

      <button onClick={handlePaymentClick}>Pagar con tarjeta de crédito</button>

      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default ProductPage;

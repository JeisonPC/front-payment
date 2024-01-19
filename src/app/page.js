"use client";
import React, { useState } from "react";
import Modal from "@components/Modal";
import styles from "./page.module.css";

import ProductSlider from "../components/ProductSlider";

const products = [
  { id: 1, image: "/spectre1.png" },
  { id: 2, image: "/spectre1.png" },
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
    <div className="container">
      <span>Inicio / Productos / Pc</span>

      <h1 className={styles.productTitle}>
        Sceptre Monitor curvo para juegos de 24.5 pulgadas
      </h1>
      <p className={styles.productPrice}>$800.000</p>
      <ProductSlider products={products} />
      <div className={styles.buttonContainer}>
        <button className="button" onClick={handlePaymentClick}>
          Pagar con tarjeta de crédito
        </button>
      </div>

      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default ProductPage;

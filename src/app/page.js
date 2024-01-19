import React from 'react';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <div>
      <h1>Nombre del Producto</h1>
      <p>Descripción del producto.</p>
      <p>Precio: $XX.XX</p>

      <Link href="/checkout">
        Pagar con tarjeta de crédito
      </Link>
    </div>
  );
};

export default ProductPage;

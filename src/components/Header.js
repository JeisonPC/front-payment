import React from 'react';

const Header = () => {
  return (
    <header>
      <h2>¡Descuentos de año nuevo!</h2>
      <nav>
        {/* Enlaces de navegación, menú, etc. */}
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          {/* Agrega más enlaces según tus necesidades */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

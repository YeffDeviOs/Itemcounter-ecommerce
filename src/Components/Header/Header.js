import React from 'react';
import './Header.css';

const Header = ({ title, color, subtitle }) => {
  return (
    <div className='Header'>
      <h1 style={{ color: `${color}` }}>{title}</h1>
      <h2>{subtitle}</h2>
      {/* <nav>
      <ul className='ListaNav'>
        <li><a className="active" href="foo">Home</a></li>
        <li><a href="foo">Nosotros</a></li>
        <li><a href="foo">Servicios</a></li>
        <li><a href="foo">Colaborá</a></li>
        <li><a href="foo">Contacto</a></li>
      </ul>
  </nav> */}

    </div>
  );
};

export default Header;

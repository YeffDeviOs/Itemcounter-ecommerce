import React from 'react';
import './Header.css';
import Img from './raven.png';
import { Icon } from 'semantic-ui-react';

// import Navbar from "./Components/Navbar/Navbar";


const Header = ({ title, color, subtitle }) => {
  return (
    <div className='Header'>
      <h1 style={{ color: `${color}` }}>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={Img} width='150' alt="Logo de Tienda" />

      <nav>
      {/* <label className="logo">Raven-PC's</label> */}

      <ul>
        <li><a className="active" href="foo">Home</a></li>
        <li><a href="foo">Nosotros</a></li>
        <li><a href="foo">Servicios</a></li>
        <li><a href="foo">Colaborá</a></li>
        <li><a href="foo">Contacto</a></li>
      </ul>
        <Icon name='cart' color='gray'size='big' />
      </nav>
    </div>
  );
};

export default Header;

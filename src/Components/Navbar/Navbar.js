import  React from 'react';
import './Navbar.css';
// import { Button, Icon } from 'semantic-ui-react';
function Navbar() {
  return (
    <div>
      <nav className='Navbar'>
      <label className="logo">Raven-PC's</label>
      <ul>
        <li><a className="active" href="foo">Home</a></li>
        <li><a href="foo">Nosotros</a></li>
        <li><a href="foo">Servicios</a></li>
        <li><a href="foo">Colaborá</a></li>
        <li><a href="foo">Contacto</a></li>
      </ul>
      </nav>

    </div>
  );
}


export default Navbar;
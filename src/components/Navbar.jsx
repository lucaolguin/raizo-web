// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import './Navbar.css' // si vas a usar estilos separados
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img 
          src={logo} 
          alt="Raizo Amoblamientos" 
          style={{ height: '150px' }} // Ajusta el tamaño según necesites
        />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

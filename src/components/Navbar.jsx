// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import './Navbar.css' // si vas a usar estilos separados

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Raizo</h2>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

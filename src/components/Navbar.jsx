import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { 
  FaSearch, 
  FaUser,
  FaShoppingCart
} from "react-icons/fa";

import { useCarrito } from '../context/CarritoContext';
import SearchModal from './SearchModal';
import LoginModal from './LoginModal';
import CartSidebar from './CartSidebar'

function Navbar() {

  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { carrito } = useCarrito();

  const toggleSearch = () => setShowSearch(prev => !prev);
  const toggleLogin = () => setShowLogin(prev => !prev);
  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Raizo Amoblamientos" className="logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>

        <li className="dropdown">
          <span>Dormitorio ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/productos/camas">Camas</Link></li>
            <li><Link to="/productos/mesitas-luz">Mesitas de Luz</Link></li>
            <li><Link to="/productos/placares">Placares</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Living ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/productos/racks-tv">Racks TV</Link></li>
            <li><Link to="/productos/ratonas">Ratonas</Link></li>
            <li><Link to="/productos/estanterias">Estanterias</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Cocina ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/productos/alacenas">Alacenas</Link></li>
            <li><Link to="/productos/mesadas">Mesadas</Link></li>
          </ul>
        </li>

        <li><Link to="/servicio-armado">Servicio de Armado</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="navbar-right">
        {/* Botón Búsqueda */}
        <button className="icon-button" onClick={toggleSearch} aria-label="Buscar">
          <FaSearch />
        </button>

        {/* Botón Perfil */}
        <button className="icon-button" onClick={toggleLogin} aria-label="Perfil">
          <FaUser />
        </button>

        {/* Botón Carrito (muestra cantidad) */}
        <button className="icon-button" onClick={toggleCart} aria-label="Carrito">
          <FaShoppingCart />
          {carrito.length > 0 && (
            <span className="badge">{carrito.length}</span>
          )}
        </button>
      </div>

      {/* Modales y Sidebar */}
      {showSearch && <SearchModal onClose={toggleSearch} />}
      {showLogin && <LoginModal onClose={toggleLogin} />}
      {showCart && <CartSidebar onClose={toggleCart} />}
    </nav>
  );
}

export default Navbar;
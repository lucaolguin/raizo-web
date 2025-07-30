import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { 
  FaSearch, 
  FaUser,
  FaShoppingCart
} from "react-icons/fa";

function Navbar() {
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
        <button className="icon-button"><FaSearch /></button>
        
        <button className="icon-button"><FaUser /></button>
        <button className="icon-button"><FaShoppingCart /></button>
      </div>
    </nav>
  );
}

export default Navbar;
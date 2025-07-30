import { 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección 1: Redes Sociales */}
        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          <div className="social-links">
            <a href="https://facebook.com/raizoamoblamientos" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="social-icon" />
            </a>
            <a href="https://instagram.com/raizo.amoblamientos" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="social-icon" />
            </a>
            <a href="https://wa.me/3516218897" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Sección 2: Contacto */}
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt /> Dirección: La Calera, Córdoba
            </li>
            <li>
              <FaPhone /> Teléfono: +54 9 351 621-8897
            </li>
            <li>
              <FaEnvelope /> Email: info@raizo.com
            </li>
          </ul>
        </div>

        {/* Sección 3: Enlaces Rápidos */}
        <div className="footer-section">
          <h3 className="footer-title">Enlaces</h3>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>© {new Date().getFullYear()} Raizo Amoblamientos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
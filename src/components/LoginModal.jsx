import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/LoginModal.css';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebaseConfig';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function LoginModal({ onClose }) {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Usuario:', result.user);
        onClose();
      })
      .catch((error) => {
        console.error('Error en login:', error);
      });
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Iniciar Sesión</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" /><br />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" /><br />

          <button className="btn-register" onClick={() => console.log('Registrar')}>Registrar</button>
          <button className="btn-login" onClick={() => console.log('Iniciar sesión')}>Iniciar Sesión</button>
        </div>
        <div className="login-buttons">
          <button className="btn-google" onClick={() => handleLogin(googleProvider)}>
            <FaGoogle /> Continuar con Google
          </button>
          <button className="btn-facebook" onClick={() => handleLogin(facebookProvider)}>
            <FaFacebook /> Continuar con Facebook
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default LoginModal;

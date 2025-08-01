import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/CartSidebar.css';
import { useCarrito } from '../context/CarritoContext';

function CartSidebar({ onClose }) {
  const { carrito, removeItem, clearCart } = useCarrito();

  const total = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return ReactDOM.createPortal(
    <div className="sidebar-overlay" onClick={onClose}>
      <div className="sidebar-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Tu Carrito</h2>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul className="cart-items">
            {carrito.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.name} x{item.quantity}</span>
                <span>${item.price * item.quantity}</span>
                <button onClick={() => removeItem(item.id)} aria-label="Eliminar">&times;</button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-footer">
          <strong>Total: ${total}</strong>
          <button onClick={clearCart} className="clear-button">Vaciar carrito</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default CartSidebar;

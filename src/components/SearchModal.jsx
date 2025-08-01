import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/SearchModal.css';

function SearchModal({ onClose }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de búsqueda: redirigir o filtrar según query
    console.log('Buscar:', query);
    // Por ejemplo:
    // navigate(`/productos/busqueda?q=${encodeURIComponent(query)}`);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Buscar Productos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default SearchModal;
// src/pages/Contacto.jsx
const Contacto = () => {
  return (
    <div className="form-control">
      <h1>Contacto</h1>
      <form style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nombre:</label>
          <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input type="email" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Mensaje:</label>
          <textarea style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }} />
        </div>
        <button type="submit" className="button">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
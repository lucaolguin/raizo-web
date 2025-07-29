// src/pages/Productos.jsx
const Productos = () => {
  const productos = [
    { id: 1, nombre: "Mesa de Roble", precio: "$25000", imagen: "https://via.placeholder.com/300x200?text=Mesa+Roble" },
    { id: 2, nombre: "Silla Moderna", precio: "$12000", imagen: "https://via.placeholder.com/300x200?text=Silla+Moderna" },
    { id: 3, nombre: "Estantería", precio: "$18000", imagen: "https://via.placeholder.com/300x200?text=Estantería" },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: '#476042' }}>Nuestros Productos</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {productos.map((producto) => (
          <div key={producto.id} style={{ 
            border: '1px solid #E6DBCF', 
            borderRadius: '8px', 
            padding: '1rem' 
          }}>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
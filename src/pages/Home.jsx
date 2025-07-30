import { useState } from 'react';

function Home() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="form-control">
      <h1>Bienvenido a Raizo Amoblamientos</h1>
      <p>Renovamos tus espacios. Muebles a medida o estándar.</p>
      <a href="/proyecto-living" 
        onMouseEnter={() => setHovered('living')}
        onMouseLeave={() => setHovered(null)}>
        {hovered === 'living' ? (
          <video
            src="../../equipo.mp4"
            autoPlay
            muted
            loop
            style={{ width: '400px', height: '40em', margin: '4rem 1rem' }}
          />
        ) : (
          <img
            src="../../proyecto-living.png"
            alt="Proyecto Living"
            style={{ maxWidth: '400px', margin: '4rem 1rem' }}
          />
        )}
      </a>
      <a href="/comoda" >
        <img
            src="../../comoda.png"
            alt="Comoda"
            style={{ maxWidth: '400px', margin: '4rem 1rem' }}
          />
      </a>
    </div>
  )
}

export default Home

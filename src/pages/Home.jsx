import { useState, useRef } from 'react';

function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="form-control">
      <h1>Bienvenido a Raizo Amoblamientos</h1>
      <p>Renovamos tus espacios. Muebles a medida o estándar.</p>

      <a href="#" onClick={(e) => e.preventDefault()}>
        <video
          ref={videoRef}
          src="../../equipo.mp4"
          autoPlay
          muted={isMuted}
          loop
          onClick={toggleMute}
          style={{ width: '350px', height: '550px', margin: '10px', cursor: 'pointer' }}
        />
      </a>

      <a href="/proyecto-living">
        <img
          src="../../proyecto-living.png"
          alt="Proyecto Living"
          style={{ maxWidth: '400px', margin: '1rem 1rem' }}
        />
      </a>

      <a href="/comoda">
        <img
          src="../../comoda.png"
          alt="Comoda"
          style={{ maxWidth: '400px', margin: '1rem 1rem' }}
        />
      </a>
    </div>
  );
}

export default Home;

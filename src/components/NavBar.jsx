import React from 'react';
import './NavBar.css';


const NavBar = () => {
  return (
    <header>
      {/* Video de fondo */}
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/video/video1.mp4" type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>

      {/* Capa oscura */}
      <div className="video-overlay"></div>

      {/* Navegación */}
      <nav>
        <div className="logo">ML</div>
        <ul className="nav-links">
          <a href="#portfolio">Portafolio</a>
          <a href="#about">Sobre mí</a>
          <a href="#contact">Contacto</a>
        </ul>
      </nav>

      {/* Hero text */}
      <div className="hero">
        <h1>MARÍA LÓPEZ</h1>
        <p>Fotografía artística y profesional</p>
        <a href="#" className="btn">Ver trabajo</a>
      </div>
    </header>
  );
};

export default NavBar;

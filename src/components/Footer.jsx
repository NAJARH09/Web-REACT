// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 María López Fotografía. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#portfolio">Portafolio</a>
          <a href="#about">Sobre mí</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

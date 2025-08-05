// src/components/Portfolio.jsx
import './Portafolio.css';
import retratoImg from '../assets/img/retrato.jpg';
import paisajeImg from '../assets/img/paisaje.jpg';
import bodaImg from '../assets/img/boda.jpg';
import urbanoImg from '../assets/img/urbano.jpg';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portafolio</h2>
      <div className="gallery">
        <div className="gallery-item" style={{ backgroundImage: `url(${retratoImg})` }}>
          <div className="overlay"><h3>Retratos</h3></div>
        </div>
        <div className="gallery-item" style={{ backgroundImage: `url(${paisajeImg})` }}>
          <div className="overlay"><h3>Paisajes</h3></div>
        </div>
        <div className="gallery-item" style={{ backgroundImage: `url(${bodaImg})` }}>
          <div className="overlay"><h3>Bodas</h3></div>
        </div>
        <div className="gallery-item" style={{ backgroundImage: `url(${urbanoImg})` }}>
          <div className="overlay"><h3>Urbano</h3></div>
        </div>
        <div className="gallery-item" style={{ backgroundImage: `url(${urbanoImg})` }}>
          <div className="overlay"><h3>Urbano</h3></div>
        </div>
        <div className="gallery-item" style={{ backgroundImage: `url(${urbanoImg})` }}>
          <div className="overlay"><h3>Urbano</h3></div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

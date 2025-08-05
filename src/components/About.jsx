
import React from 'react';
import './About.css'; 

const About = ({ image }) => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Fotógrafa profesional con más de 10 años de experiencia capturando momentos únicos y emociones auténticas. Mi enfoque combina técnica impecable con una sensibilidad artística que busca revelar la belleza en lo cotidiano.
          </p>
          <p>
            Especializada en fotografía de retrato, paisaje y eventos, mi trabajo ha sido exhibido en varias galerías nacionales e internacionales.
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="María López fotógrafa" />
        </div>
      </div>
    </section>
  );
};

export default About;

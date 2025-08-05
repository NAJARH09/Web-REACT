// src/components/Contacto.jsx
import React from 'react';
import './Contacto.css';

function Contacto({ mensaje, email }) {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p>{mensaje}</p>
      <p>
        Puedes escribirme a: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit" className="btn">Enviar</button>
      </form>
      <div className="social-links">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-behance"></i></a>
        <a href="#"><i className="fab fa-500px"></i></a>
      </div>
    </section>
  );
}

export default Contacto;

// src/components/Workflow.jsx
import './Workflow.css';
import img1 from '../assets/img/im1.png';
import img2 from '../assets/img/im2.png';
import img3 from '../assets/img/im3.png';
import img4 from '../assets/img/im4.png';

function Workflow() {
  return (
    <section className="workflow-section">
      <h2>Mi Proceso de Trabajo</h2>
      <div className="workflow-cards">
        <div className="workflow-card">
          <i className="fas fa-comments"></i>
          <h3>1. Consulta</h3>
          <p>Escucho tus ideas, objetivos y estilo para crear una propuesta personalizada.</p>
          <img src={img1} alt="Consulta" className="workflow-img" />
        </div>

        <div className="workflow-card">
          <i className="fas fa-camera-retro"></i>
          <h3>2. Sesiones</h3>
          <p>Organizo una sesión profesional cuidando cada detalle de luz, ambiente y dirección.</p>
          <img src={img2} alt="Sesiones" className="workflow-img" />
        </div>

        <div className="workflow-card">
          <i className="fas fa-edit"></i>
          <h3>3. Edición</h3>
          <p>Selecciono y edito las mejores tomas con un estilo artístico, manteniendo naturalidad.</p>
          <img src={img3} alt="Edición" className="workflow-img" />
        </div>

        <div className="workflow-card">
          <i className="fas fa-folder-open"></i>
          <h3>4. Entrega</h3>
          <p>Recibes tus fotos en alta calidad listas para imprimir o compartir en redes.</p>
          <img src={img4} alt="Entrega" className="workflow-img" />
        </div>
      </div>
    </section>
  );
}

export default Workflow;

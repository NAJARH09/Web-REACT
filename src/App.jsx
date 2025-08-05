import './App.css';
import NavBar from './components/NavBar';
import About from './components/About'; 
import mariaImg from './assets/img/maria.jpg';
import Workflow from './components/Workflow';
import Portfolio from './components/Portafolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
    const mensajeContacto = "Estoy disponible para nuevos proyectos. ¡Contáctame!";
    const emailContacto = "maria.foto@gmail.com";
  return (
    <>
      <NavBar />
      <Portfolio/>
      <About image={mariaImg} /> 
      <Workflow />
      <Contacto mensaje={mensajeContacto} email={emailContacto} />
      <Footer/>
    </>
  );
}

export default App;

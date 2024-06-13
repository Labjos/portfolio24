import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='talk'>
        <p className='title-talk'>Let's talk</p>
        <p>Every project starts with a coffee, every proposal starts with a coffee.<br/> Let's talk and find the best way to collaborate.</p>
        <img className='logo-footer' src='../../../../iso-josep.png' />
      </div>
      <div className='link'>
      <p><strong>Direct Links</strong></p>
      <Link className="navbar-brand" to="/home">Home</Link>
      <Link className="nav-link active" aria-current="page" to="/trayectory">Trajectory</Link>
      <Link className="nav-link" to="/projects">Projects</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
      </div>
      <div className='data'>
      <p><strong>Contact</strong></p>
        <div className='data-link'>
          <Link to="https://github.com/Labjos" rel="noopener noreferrer"><i className="bi bi-github"></i></Link>
          <Link to="https://github.com/Labjos" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></Link>
          <Link to="https://github.com/Labjos" rel="noopener noreferrer"><i className="bi bi-envelope-check"></i></Link>
          <Link to="https://github.com/Labjos" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></Link>
          <Link to="https://github.com/Labjos" rel="noopener noreferrer"><i className="bi bi-instagram"></i></Link>
          <Link to="" target="" rel="noopener noreferrer"><i className="bi bi-laptop"></i></Link>
        </div>
        <p className='web'><strong>www.labjos.com</strong></p>
      </div>
    </div>
  )
}

export default Footer;

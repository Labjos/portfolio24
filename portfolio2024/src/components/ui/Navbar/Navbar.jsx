import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-ligth">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-toggler">
        <Link className="navbar-brand" to="/home">
          <img src="../../../../isotipo.png"  alt="imagen icono" />
        </Link>
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/trayectory">Trajectory</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  </>
  )
}

export default Navbar
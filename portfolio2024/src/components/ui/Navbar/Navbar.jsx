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
        <a className="navbar-brand" href="#">
          <img src="../../../../isotipo.png"  alt="imagen icono" />
        </a>
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Trajectory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  </>
  )
}

export default Navbar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <a className="navbar-brand fw-bold" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link fw-bold active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold active" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link fw-bold active" href="#" >
            Pages
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link fw-bold active" href="#" >
            Services
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link fw-bold active" href="#" >
            Portfolio
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link fw-bold active" href="#" >
            Blog
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link fw-bold active" href="#" >
            Contact
          </a>
        </li>
      </ul>
      <form className="d-flex ms-5">
        <input className="form-control w-75" placeholder="Search" id="inputFeild" style={{borderStartStartRadius:"20px",borderEndStartRadius:"20px"}}/>
        <button className="btn btn-light text-primary" style={{borderStartEndRadius:"20px",borderEndEndRadius:"20px",width:"3.5rem"}}><FontAwesomeIcon icon={faSearch}/></button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

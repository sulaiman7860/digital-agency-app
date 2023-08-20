import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <span className="navbar-brand fw-bold" href="#">LOGO</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fw-bold active" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold active" href="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link fw-bold active" href="/pages" >
            Pages
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link fw-bold active" href="/services" >
            Services
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link fw-bold active" href="/portfolio" >
            Portfolio
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link fw-bold active" href="/blog" >
            Blog
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link fw-bold active" href="/contact" >
            Contact
          </Link>
        </li>
      </ul>
      <form className="d-flex ms-5">
        <input className="w-75 border-0 ps-3" placeholder="Search" id="inputFeild" style={{borderStartStartRadius:"20px",borderEndStartRadius:"20px"}}/>
        <button className="btn btn-light text-primary" style={{borderStartEndRadius:"20px",borderEndEndRadius:"20px",width:"3.5rem"}}><FontAwesomeIcon icon={faSearch}/></button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

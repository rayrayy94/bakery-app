import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>

            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <Link to="/" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 text-uppercase text-white"><FontAwesomeIcon icon={faBirthdayCake} className="fs-1 text-primary me-3"/>CakeZone</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto mx-lg-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/aboutus" className="nav-item nav-link">About Us</Link>
                        <Link to="/" className="nav-item nav-link">Menu & Pricing</Link>
                        <Link to="/" className="nav-item nav-link">Master Chefs</Link>
                        <div className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/" className="dropdown-item">Our Service</Link>
                                <Link to="/" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

        </div>
    )
}

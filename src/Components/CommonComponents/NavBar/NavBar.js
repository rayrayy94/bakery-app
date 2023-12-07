import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function NavBar() {

    const [selected, setSelected] = useState('home');


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
                        <Link to="/" className={selected === 'home'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('home')}>Home</Link>
                        <Link to="/aboutus" className={selected === 'about'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('about')}>About Us</Link>
                        <Link to="/cakes" className={selected === 'cakes'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('cakes')}>Cakes</Link>
                        <Link to="/addcake" className={selected === 'addcake'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('addcake')}>Add Cake</Link>
                        <Link to="/contact" className={selected === 'contact'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('contact')}>Contact Us</Link>
                        <Link to="/sellerorder" className={selected === 'sellerorder'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('sellerorder')}>Seller Orders</Link>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

        </div>
    )
}

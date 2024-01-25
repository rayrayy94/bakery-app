import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faMapLocationDot, faEnvelope, faPhoneFlip, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <>
        {/* <!-- Footer Start --> */}
        <div className="container-fluid bg-img text-secondary" style={{marginTop: "90px"}}>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-6 mb-lg-n5">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
                            <Link to='/' className="navbar-brand">
                                <h1 className="m-0 text-uppercase text-white"><FontAwesomeIcon icon={faBirthdayCake} className="fs-1 text-dark me-3" />CakeZone</h1>
                            </Link>
                            <p className="mt-3">"Welcome to Cake Zone, where every bite is a celebration! Immerse yourself in a world of indulgence with our exquisite cakes. From classic delights to custom creations, Cake Zone is your destination for sweetness. Explore a symphony of flavors, crafted with passion and precision. Get ready to elevate your cake experience – this is Cake Zone, where sweet dreams come true!"</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <h4 className="text-primary text-uppercase mb-4">Get In Touch</h4>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faMapLocationDot} className='text-primary me-2' />
                                    <p className="mb-0">123 Street, USA</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faEnvelope} className='text-primary me-2' />
                                    <p className="mb-0">info@bakery.com</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faPhoneFlip} className='text-primary me-2' />
                                    <p className="mb-0">1-800-2345-6789</p>
                                </div>
                                <div className="d-flex mt-4">
                                    <Link to='/' className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"><FontAwesomeIcon icon={faArrowCircleRight} className='fw-normal' /></Link>
                                    <Link to='/' className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"><FontAwesomeIcon icon={faEnvelope} className='fw-normal' /></Link>
                                    <Link to='/' className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"><FontAwesomeIcon icon={faEnvelope} className='fw-normal' /></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-primary text-uppercase mb-4">Quick Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link to='/' className="text-secondary mb-2"><FontAwesomeIcon icon={faArrowCircleRight} className='text-primary me-2' />Home</Link>
                                    <Link to='/aboutus' className="text-secondary mb-2"><FontAwesomeIcon icon={faArrowCircleRight} className='text-primary me-2' />About Us</Link>
                                    <Link to='/cakes' className="text-secondary mb-2"><FontAwesomeIcon icon={faArrowCircleRight} className='text-primary me-2' />Our Cakes</Link>
                                    {/* <Link to='/team' className="text-secondary mb-2"><FontAwesomeIcon icon={faArrowCircleRight} className='text-primary me-2' />Meet The Team</Link> */}
                                    <Link to='/contact' className="text-secondary"><FontAwesomeIcon icon={faArrowCircleRight} className='text-primary me-2' />Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-primary text-uppercase mb-4">Newsletter</h4>
                                <p>Stay in the sweet loop! Sign up for our newsletter to receive exclusive offers.</p>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid text-secondary py-4" style={{background: "#111111"}}>
            <div className="container text-center">
                <p className="mb-0">&copy; <Link to='/' className="text-white border-bottom">The Bakery Hub</Link>. All Rights Reserved. 
                
                {/*  This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
        </div>
        {/* <!-- Footer End --> */}

    </>
      
  )
}

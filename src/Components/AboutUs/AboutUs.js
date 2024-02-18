import React from 'react';
import aboutImg from '../../img/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {


  return (
    <>

        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: "600px"}}>
                    <h2 className="text-primary font-secondary">About Us</h2>
                    <h1 className="display-4 text-uppercase">Welcome To CakeZone</h1>
                </div>
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "400px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src={aboutImg} alt='demo cake' style={{objectFit: "cover"}} />
                        </div>
                    </div>
                    <div className="col-lg-6 pb-5">
                        <h4 className="mb-4">Enter the Sweet Symphony: Cake Zone Unveils a World of Exquisite Delights!</h4>
                        <p className="mb-5">Welcome to Cake Zone, where every bite is a celebration! Immerse yourself in a world of indulgence with our exquisite cakes. From classic delights to custom creations, Cake Zone is your destination for sweetness. Explore a symphony of flavors, crafted with passion and precision. Get ready to elevate your cake experience – this is Cake Zone, where sweet dreams come true!</p>
                        <div className="row g-5">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{width: "90px", height: "90px"}}>
                                    <FontAwesomeIcon icon={faHeartbeat} className="fa-2x text-white" />
                                </div>
                                <h4 className="text-uppercase">100% Healthy</h4>
                                <p className="mb-0">Indulge guilt-free! Our commitment to your well-being is reflected in our 100% healthy options. Delight in flavors that nourish without compromising on taste. From wholesome ingredients to delectable treats, savor the goodness in every bite. We believe in making wellness a delightful experience!</p>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{width: "90px", height: "90px"}}>
                                    <FontAwesomeIcon icon={faAward} className="fa-2x text-white" />
                                </div>
                                <h4 className="text-uppercase">Award Winning</h4>
                                <p className="mb-0">Savor the Taste of Excellence: Our Award-Winning Creations Speak Volumes. Elevate your experience with our exceptional treats, crafted to perfection and celebrated by accolades. Join us on a journey of culinary distinction, where every bite is a testament to our commitment to excellence. Discover why we stand out among the best!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="container-fluid bg-img py-5 mb-5">
            <div className="container py-5">
                <div className="row gx-5 gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-star text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Our Experience</h6>
                                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-users text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Cake Specialist</h6>
                                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-check text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Complete Project</h6>
                                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-mug-hot text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Happy Clients</h6>
                                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

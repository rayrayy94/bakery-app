import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Service() {
  return (
    <div>
         {/* <!-- Service Start --> */}
        <div className="container-fluid service position-relative px-5 mt-5" style={{marginBottom: "135px"}}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <h4 className="text-uppercase mb-3">Birthday Cake</h4>
                            <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                            <Link to='/' className="text-uppercase text-dark">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <h4 className="text-uppercase mb-3">Wedding Cake</h4>
                            <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                            <Link to='/' className="text-uppercase text-dark">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <h4 className="text-uppercase mb-3">Custom Cake</h4>
                            <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                            <Link to='/' className="text-uppercase text-dark">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6 text-center">
                        <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                        <Link to='/' className="btn btn-primary border-inner py-3 px-5">Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Service Start --> */}
      
    </div>
  )
}

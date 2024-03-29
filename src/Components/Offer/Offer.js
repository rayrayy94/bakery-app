import React from 'react';
import { Link } from 'react-router-dom';

export default function Offer() {
  return (
    // <!-- Offer Start -->
    <div className="container-fluid bg-offer my-5 py-5">
        <div className="container py-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-7 text-center">
                    <div className="section-title position-relative text-center mx-auto mb-4 pb-3" style={{maxWidth: "600px"}}>
                        <h2 className="text-primary font-secondary">Special Kombo Pack</h2>
                        <h1 className="display-4 text-uppercase text-white">Super Crispy Cakes</h1>
                    </div>
                    <p className="text-white mb-4">Savor the sweetness of moments with our irresistible baked delights. From delectable pastries to bespoke cakes, our creations are a celebration of flavors and artistry, ensuring every bite is a moment of pure delight.</p>
                    <Link to='/' className="btn btn-primary border-inner py-3 px-5 me-3">Shop Now</Link>
                    <Link to='/' className="btn btn-dark border-inner py-3 px-5">Read More</Link>
                </div>
            </div>
        </div>
    </div>
    // <!-- Offer End -->
  )
}

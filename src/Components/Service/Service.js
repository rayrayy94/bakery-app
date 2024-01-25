import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
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
                            <p>Celebrate joyous moments with our birthday cakes, each a sweet masterpiece blending layers of delectable flavors, sumptuous frosting, and artistic design. Tailored for your special day, our cakes add a touch of personalized delight to your celebrations</p>
                            {/* <Link to='/' className="text-uppercase text-dark">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <h4 className="text-uppercase mb-3">Wedding Cake</h4>
                            <p>Elevate your wedding with our meticulously crafted cakes, each a culinary symphony of flavors, luxurious frosting, and elegant design. Designed to add sophistication to your special day, choose from our array of options to make your wedding celebration truly memorable</p>
                            {/* <Link to='/' className="text-uppercase text-dark">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <h4 className="text-uppercase mb-3">Custom Cake</h4>
                            <p>Experience culinary perfection with our custom cakes. Each masterpiece uniquely blends flavors, expert frosting, and personalized design. Tailor your celebrations with these one-of-a-kind cakes, adding a unique touch to any occasion. Choose from a variety of flavors, from classic to innovative</p>
                            {/* <Link to='/' className="text-uppercase text-dark">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link> */}
                        </div>
                    </div>
                    <center>
                    <div className="col-lg-6 col-md-6 text-center">
                        <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                        <Link to='/cakes' className="btn btn-primary border-inner py-3 px-5">Order Now</Link>
                    </div>
                    </center>
                </div>
            </div>
        </div>
        {/* <!-- Service Start --> */}
      
    </div>
  )
}

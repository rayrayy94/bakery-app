import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { updateNavItem } from '../../../Redux/CounterSlice';
import { useDispatch } from 'react-redux';

export default function TopBar() {

    const dispatch = useDispatch();

    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid px-0 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-4 text-center bg-secondary py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faEnvelope} className="fs-1 text-primary me-3" />
                            <div className="text-start">
                                <h6 className="text-uppercase mb-1">Email Us</h6>
                                <span>info@bakery.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center bg-primary border-inner py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <Link to='/' className="navbar-brand" onClick={()=> dispatch(updateNavItem('home'))}>
                                <h1 className="m-0 text-uppercase text-white"><FontAwesomeIcon icon={faBirthdayCake} className="fs-1 text-dark me-3" /> CakeZone</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center bg-secondary py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faPhoneFlip} className="fs-1 text-primary me-3" />
                            <div className="text-start">
                                <h6 className="text-uppercase mb-1">Call Us</h6>
                                <span>1-800-2345-6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

        </div>
    )
}

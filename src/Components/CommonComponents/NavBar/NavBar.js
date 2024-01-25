import React, { useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../Config/Config';
import axios from 'axios';

export default function NavBar() {

    let navigate = useNavigate();

    const [selected, setSelected] = useState('home');
    const [userImage, setUserImage] = useState('');
    // console.log(userImage)

    useEffect(()=> {
        axios.get(`${API.apiUri}/login/${id}`).then((res)=>{
            console.log(res.data);
            setUserImage(res?.data?.[0].userImage);
        }).catch((e)=>{
            console.log(e);
        })
    })

    const userName = localStorage.getItem('userName');
    const id = localStorage.getItem('userID');
    const accountType = localStorage.getItem('accountType');
    // const userImage = localStorage.getItem('userImage');


    const logout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userID');
        localStorage.removeItem('accountType');
        setUserImage('');
        // localStorage.removeItem('userImage');
        navigate('/');
    }


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
                <div className="collapse navbar-collapse nav-container" id="navbarCollapse">
                    <div className="navbar-nav mx-4">
                        <Link to="/" className={selected === 'home'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('home')}>Home</Link>
                        <Link to="/aboutus" className={selected === 'about'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('about')}>About Us</Link>
                        <Link to="/cakes" className={selected === 'cakes'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('cakes')}>Cakes</Link>
                        
                        {accountType === 'seller' ?
                        <>
                            <Link to="/addcake" className={selected === 'addcake'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('addcake')}>Add Cake</Link>
                            <Link to="/mycakes" className={selected === 'mycakes'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('mycakes')}>My Cakes</Link>
                            <Link to="/sellerorder" className={selected === 'sellerorder'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('sellerorder')}>Seller Orders</Link>
                        </>

                        : null
                        }

                        {accountType === 'customer' ?
                        <>
                            <Link to="/customerorder" className={selected === 'customerorder'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('customerorder')}>Customer Orders</Link>
                        </>

                        : null
                        }
                        
                        <Link to="/contact" className={selected === 'contact'? "nav-item nav-link active": "nav-item nav-link"} onClick={()=> setSelected('contact')}>Contact Us</Link>
                    </div>

                    <div className='px-5 btn-container'>
                        {/* <div className='signup-btn'>
                            <Link to={id ? '/' : '/signup'}>
                                <button className='btn btn-signup btn-primary border-inner w-100 py-3'><FontAwesomeIcon icon={faUser} className="userIcon fs-1 text-primary me-3"/>{userName ? userName.toUpperCase() : 'SIGN UP'}</button>
                            </Link>
                        </div> */}
                        <div className='signup-btn'>
                            <Link to={id ? '/' : '/signup'}>
                                <button className='btn btn-signup btn-primary border-inner w-100 py-3'>{userImage ? <img src={userImage} alt='user' className="userIcon fs-1 text-primary me-3" /> : <FontAwesomeIcon icon={faUser} className="userIcon fs-1 text-primary me-3"/>}{userName ? userName.toUpperCase() : 'SIGN UP'}</button>
                            </Link>
                        </div>
                        
                        <div className='logout-btn'>
                            {id ? 
                            <>
                                <button className='btn btn-logout btn-primary border-inner w-100 py-3' onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} className="userIcon fs-1 text-primary me-3"/>LOG OUT</button>
                            </>
                            : null}
                        </div>
        
                    </div>

                </div>
            </nav>
            {/* <!-- Navbar End --> */}

        </div>
    )
}

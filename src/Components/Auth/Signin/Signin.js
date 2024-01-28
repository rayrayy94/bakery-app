import React from 'react';
import './styles.css';
import axios from 'axios';
import API from '../../../Config/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SigninSchema } from './Validation/SigninSchema';
import { Link } from 'react-router-dom';

export default function Signin() {

    let navigate = useNavigate();


    let initialValues = {
        email: '',
        password: ''
    }

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: SigninSchema,
        onSubmit: () => {
            addData();
        }
    })


    function addData(){

        const userEmail = document.getElementById('email').value;
        const userPassword = document.getElementById('password').value;

        const loginInfo = {
            userEmail,
            userPassword
        }

        axios.post(`${API.apiUri}/login`, loginInfo).then((res)=> {
            console.log(res);
            NotificationManager.success('Login Successful');

            localStorage.setItem('userName', res.data.data.firstName);
            localStorage.setItem('userID', res.data.data._id);
            localStorage.setItem('accountType', res.data.data.accountType);
            // localStorage.setItem('userImage', res.data.data.userImage);

            setTimeout(()=> {
                navigate('/')
            },3000);
        }).catch((e)=> {
            console.log(e);
            console.log(e.response.data.message);
            NotificationManager.error('Login Failed!');
        })

    }


  return (
      <div>
        <NotificationContainer />
          <div className="container-fluid contact position-relative px-5" style={{marginTop: "90px"}}>
            <div className="container">
                <div className="row g-5 mb-5 card-container">
                    <div className="col-lg-4 col-md-6 signup-card">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <FontAwesomeIcon icon={faUser} className='fs-1 text-white' />
                            <h6 className="text-uppercase my-2">Login</h6>
                            <span>Access Your Account</span>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center form-container">

                    <h1>Login</h1>

                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} className='signin-form'> 
                            <div className="row g-3">
                        
                                <div className="col-sm-6">
                                    <p><span className='hiddenItem'>:</span>{errors.email}</p>
                                    <input type="email" name='email' className="form-control bg-light border-0 px-4" id='email' placeholder="Your Email" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                </div>
                                
                                <div className="col-sm-6">
                                <p><span className='hiddenItem'>:</span>{errors.password}</p>
                                    <input type="password" name='password' className="form-control bg-light border-0 px-4" id='password' placeholder="Password" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                </div>
                                
                                {/* <input type="submit" className="btn btn-primary border-inner w-100 py-3" value="Create Account" /> */}
                                
                                <div className="col-sm-12">
                                    <button className="btn btn-primary border-inner w-100 py-3" type="submit">Login</button>
                                </div>

                                <div className='col-sm-12'>
                                    <center>
                                        <Link to='/signup'>
                                            Create An Account
                                        </Link>
                                    </center>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

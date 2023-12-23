import React from 'react';
import './styles.css';
import axios from 'axios';
import API from '../../../Config/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import { SignupSchema } from './Validation/SignupSchema';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

export default function Signup() {

    let navigate = useNavigate();


    let initialValues = {
        firstName : '',
        lastName : '',
        phoneNumber : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues : initialValues,
        validationSchema : SignupSchema,
        onSubmit : () => {
            addData();
        }
    })


    function addData(){

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const accountTypeArray = document.getElementById('accountType');
        const accountType = accountTypeArray[accountTypeArray.selectedIndex].value;
        

        const signupInfo = {
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
            accountType
        }


        if(confirmPassword === password){
            axios.post(`${API.apiUri}/signup`, signupInfo).then((res) => {
                console.log(res);
                NotificationManager.success('Signup Successful');
                setTimeout(()=> {
                    navigate('/signin')
                }, 3000);
            }).catch((e)=> {
                console.log(e);
                console.log(e.response.data.message); // added this to error w/ same email signup
                NotificationManager.error('Signup Failed');
            })
        }
        else{
            NotificationManager.error('Password Does Not Match!');
        }

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
                            <h6 className="text-uppercase my-2">Signup</h6>
                            <span>Join as a customer or as a seller</span>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center form-container">

                    <h1>Sign Up</h1>

                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} className='signup-form'> 
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <p><span className='hiddenItem'>:</span>{errors.firstName}</p>
                                    <input type="text" name='firstName' className="form-control bg-light border-0 px-4" id='firstName' placeholder="First Name" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                                </div>
                                <div className="col-sm-6">
                                <p><span className='hiddenItem'>:</span>{errors.lastName}</p>
                                    <input type="text" name='lastName' className="form-control bg-light border-0 px-4" id='lastName' placeholder="Last Email" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                                </div>
                                <div className="col-sm-12">
                                <p><span className='hiddenItem'>:</span>{errors.phoneNumber}</p>
                                    <input type="tel" name='phoneNumber' className="form-control bg-light border-0 px-4" id='phoneNumber' placeholder="Phone Number" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} />
                                </div>
                                <div className="col-sm-12">
                                <p><span className='hiddenItem'>:</span>{errors.email}</p>
                                    <input type="email" name='email' className="form-control bg-light border-0 px-4" id='email' placeholder="Your Email" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                </div>
                                <div className="col-sm-6">
                                <p><span className='hiddenItem'>:</span>{errors.password}</p>
                                    <input type="password" name='password' className="form-control bg-light border-0 px-4" id='password' placeholder="Password" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                </div>
                                <div className="col-sm-6">
                                <p><span className='hiddenItem'>:</span>{errors.confirmPassword}</p>
                                    <input type="password" name='confirmPassword' className="form-control bg-light border-0 px-4" id='confirmPassword' placeholder="Confirm Password" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
                                </div>
                                <div className="col-sm-12">
                                <p><span className='hiddenItem'>:</span>{errors.accountType}</p>
                                    <select id='accountType' name='accountType' className="form-control bg-light border-0 px-4" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.accountType}>
                                        <option value="default">--- CHOOSE AN ACCOUNT TYPE ---</option>
                                        <option value="customer">CUSTOMER</option>
                                        <option value="seller">SELLER</option>
                                    </select>
                                </div>

                                {/* <input type="submit" className="btn btn-primary border-inner w-100 py-3" value="Create Account" /> */}
                                
                                <div className="col-sm-12">
                                    <button className="btn btn-primary border-inner w-100 py-3" type="submit">Create Account</button>
                                </div>

                                <div className='col-sm-12'>
                                    <center>
                                        <Link to='/signin'>
                                            Already Have An Account ?
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

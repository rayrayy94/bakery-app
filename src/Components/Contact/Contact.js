import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import API from '../../Config/Config';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { contactSchema } from './Validation/ContactSchema';
import { useFormik } from 'formik';
import './styles.css';

export default function ContactUs() {

    const initialValues = {
        fullName: '',
        email: '',
        subject: '',
        message: '',
    }

    const { values, errors, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,
        onSubmit: ()=> {
            sendEmail();
        }
    })


    function sendEmail(){
        // e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const payload = {
            fullName,
            email,
            subject,
            message
        }

        axios.post(`${API.apiUri}/contact`, payload).then(()=>{
            console.log('email sent');
            NotificationManager.success('Email Sent!');
        }).catch((e)=>{
            console.log(e);
            NotificationManager.error('Email Not Sent!');
        })

    }

   

  return (
    <>

        {/* <!-- Contact Start --> */}
        <div className="container-fluid contact position-relative px-5" style={{marginTop: "90px"}}>

        <NotificationContainer />
        
            <div className="container">
                <div className="row g-5 mb-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <FontAwesomeIcon icon={faMapLocationDot} className='fs-1 text-white' />
                            <h6 className="text-uppercase my-2">Our Office</h6>
                            <span>123 Street, USA</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <FontAwesomeIcon icon={faEnvelope} className='fs-1 text-white' />
                            <h6 className="text-uppercase my-2">Email Us</h6>
                            <span>info@bakery.com</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <FontAwesomeIcon icon={faPhoneFlip} className='fs-1 text-white' />
                            <h6 className="text-uppercase my-2">Call Us</h6>
                            <span>1-800-2345-6789</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} className='contactForm'>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <p><span className="hiddenItem">:</span>{errors.fullName}</p>
                                    <input type="text" name='fullName' className="form-control bg-light border-0 px-4" id='fullName' placeholder="Your Name" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.fullName} />
                                </div>
                                <div className="col-sm-6">
                                    <p><span className="hiddenItem">:</span>{errors.email}</p>
                                    <input type="email" name='email' className="form-control bg-light border-0 px-4" id='email' placeholder="Your Email" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                </div>
                                <div className="col-sm-12">
                                    <p><span className="hiddenItem">:</span>{errors.subject}</p>
                                    <input type="text" name='subject' className="form-control bg-light border-0 px-4" id='subject' placeholder="Subject" style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.subject} />
                                </div>
                                <div className="col-sm-12">
                                    <p><span className="hiddenItem">:</span>{errors.message}</p>
                                    <textarea name='message' className="form-control bg-light border-0 px-4 py-3" rows="4" id='message' placeholder="Message" onChange={handleChange} onBlur={handleBlur} value={values.message}></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button className="btn btn-primary border-inner w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}


        
    </>
  )
}


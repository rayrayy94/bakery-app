import React from 'react';
import axios from 'axios';
import API from '../../Config/Config';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { OrderSchema } from './Validation/OrderSchema';
import { useFormik } from 'formik';
import Modal from 'react-modal';
import { customStyles2 } from '../../Styles/ModalStyles';
import Main from '../Stripe/Main';

export default function Orders() {

    const customerID = localStorage.getItem('userID');
    const [sellerId, setSellerId] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    let initialValues = {
        userName: '',
        userEmail: '',
        address: '',
        paymentType: ''
    };

    let { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: OrderSchema,
        onSubmit: () => {
            orderInfo();
        }
    });


   let navigate = useNavigate();

   let location = useLocation();
   let id = location.state.id;


    const [cakeImage, setCakeImage] = useState("");

    useEffect(()=> {
        async function getData(){
            await axios.get(`${API.apiUri}/cake/${id}`).then((res)=>{
                console.log(res.data);

                document.getElementById('cakeName').value = res.data.cakeName;
                document.getElementById('cakePrice').value = res.data.price;
                document.getElementById('cakeType').value = res.data.cakeType;
                setSellerId(res.data.sellerId);
                setCakeImage(res.data.cakeImage); // getting image from database and setting it within cakeImage useState

            }).catch((e)=>{
                console.log(e);
            });
        }
        getData();
    }, [id]);

    function orderInfo(){

        // e.preventDefault(); -- dont need this when using formik

        let cakeName = document.getElementById('cakeName').value;
        let cakeType = document.getElementById('cakeType').value;
        let price = document.getElementById('cakePrice').value;
        let userName = document.getElementById('userName').value;
        let userEmail = document.getElementById('userEmail').value;
        let address = document.getElementById('address').value;
        let method = document.getElementById('paymentType');
        let paymentType = method[method.selectedIndex].value;

        let orderDetails = {
            cakeName,
            cakeType,
            price,
            userName,
            userEmail,
            address,
            cakeImage, // this has the value of cakeImage to be pushed into database when order is being placed
            paymentType,
            customerId: customerID,
            sellerId

        }

        if(paymentType === 'card'){
            setIsOpen(true);
        }else{
            axios.post(`${API.apiUri}/orders`, orderDetails).then((res)=> {
                console.log(res.data);
                NotificationManager.success('Order Successful!');
                navigate('/customerorder');
            }).catch((e)=>{
                console.log(e);
                NotificationManager.error('Order Failed!');
            });

        }


    }

    useEffect(()=> {
        if(!localStorage.getItem('userID')){
            navigate('/');
        }
      }, [navigate]);



    function goBack(){
        navigate('/cakes');
    };

    function closeModal(){
        setIsOpen(false);
    }


  return (
    <div className='container add-cake'>
        <NotificationContainer />

        <h1>Order Your Cake</h1>
        

        <div className="row justify-content-center">
            <div className="col-lg-6">
                <form className='cakeForm' onSubmit={handleSubmit} >
                    <div className="row g-3">

                    <div className="col-sm-12">
                            <center >
                              <div>
                                  <img src={cakeImage} alt='cake' className='cakeImage'/> 
                                  {/* displaying the image on order screen for customer */}
                              </div>
                            </center>

                        </div>
                        <div className="col-sm-6">
                            <span className='hiddenItem'>:</span>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeName' id='cakeName' placeholder="Cake Name" style={{height: "55px"}} disabled />
                        </div>
                        <div className="col-sm-6">
                            <span className='hiddenItem'>:</span>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeType' id='cakeType' placeholder="Cake Type"  style={{height: "55px"}} disabled />
                        </div>
                        <div className="col-sm-12">
                            <span className='hiddenItem'>:</span>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakePrice' id='cakePrice' placeholder="Price" style={{height: "55px"}} disabled />
                        </div>
                        <div className="col-sm-12">
                            <p><span className='hiddenItem'>:</span>{errors.userName}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='userName' id='userName' placeholder="Enter Your Full Name: " style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.userName} />
                        </div>
                        <div className="col-sm-12">
                            <p><span className='hiddenItem'>:</span>{errors.userEmail}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='userEmail' id='userEmail' placeholder="Enter Your Email: " style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.userEmail} />
                        </div>
                        <div className="col-sm-12">
                            <p><span className='hiddenItem'>:</span>{errors.address}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='address' id='address' placeholder="Enter Your Address: " style={{height: "55px"}} onChange={handleChange} onBlur={handleBlur} value={values.address} />
                        </div>
                        <div className="col-sm-12">
                            <p><span className='hiddenItem'>:</span>{errors.paymentType}</p>
                            <select name="paymentType" id='paymentType' className='selectMenu' onChange={handleChange} onBlur={handleBlur} value={values.paymentType}>
                                <option value="default"> --- CHOOSE A PAYMENT METHOD ---</option>
                                <option value="cash">Cash</option>
                                <option value="card">Card</option>
                            </select>
                        </div>


                       <center>
                          <div className="col-sm-12">
                              <button className="btn btn-primary border-inner w-50 py-3 center my-3" type='submit'>Order Cake</button>
                          </div>

                          <div className="col-sm-12">
                              <button className="btn btn-primary border-inner w-50 py-3 center my-3" onClick={goBack}>Cancel Order</button>
                          </div>
                        </center>
                    </div>
                </form>
            </div>
        </div>


        <Modal
                isOpen={isOpen}
                onRequestClose={closeModal} //close modal clicking outside of modal anywhere on screen
                style={customStyles2}
                contentLabel="Example Modal"
            >
                

                <Main price={250} />
    
            </Modal>
    </div>
  )
}

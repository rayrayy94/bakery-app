import React, { useEffect } from 'react';
import Confirm from '../../img/confirm.webp';
import './styles.css';
import axios from 'axios';
import API from '../../Config/Config';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ConfirmPayment() {

    const navigate = useNavigate();

    const {orderId} = useParams();
    console.log(orderId)


    useEffect(()=> {
        axios.patch(`${API.apiUri}/orders/${orderId}`, {paymentStatus: true}).then((res)=> {
            console.log(res);
        }).catch((e)=> {
            console.log(e);
        })

        axios.patch(`${API.apiUri}/wallet/${orderId}`, {paymentStatus: true}).then((res)=> {
            console.log(res);
        }).catch((e)=> {
            console.log(e);
        })

    }, [orderId]);



  return (
    <div className='confirm-payment-container'>
        <div>
            <img src={Confirm} alt="confirmPayment" width={500}/>

            <h1>Order has been confirmed: {orderId}</h1>
            <button className='btn btn-primary'onClick={()=> navigate('/mycakes')}> Track Your Order</button>
            <br /><br />
            <button className='btn btn-primary' onClick={()=> navigate('/')}> Back to home</button>
        </div>
    </div>
  )
}

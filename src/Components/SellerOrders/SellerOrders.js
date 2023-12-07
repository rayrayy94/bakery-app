import React from 'react';
import './styles.css';
import { useEffect, useState } from 'react';
import API from '../../Config/Config';
import axios from 'axios';

export default function SellerOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        async function getData(){
            await axios.get(`${API.apiUri}/orders`).then((res)=>{
                console.log(res.data);
                setOrders(res.data);
            }).catch((e)=>{
                console.log(e);
            });
        }
        getData();
    }, []);


  return (
    <div className='ordersContainer'>

        {orders.map((item)=>{
            return(
                <div className='orders' key={item._id}>

                    <div className='imageContainer'>
                        <img src={item.cakeImage} alt='cake'/>
                    </div>

                    <div className='cakeInfo'>
                        <h2>Order Information</h2>
                        <p><span>Cake Name: </span>{item.cakeName}</p>
                        <p><span>Cake Type: </span>{item.cakeType}</p>
                        <p><span>Cake Price: </span>${item.price}</p>
                    </div>

                    <div className='customerInfo'>
                        <h2>Customer Information</h2>
                        <p><span>Customer Name: </span>{item.userName}</p>
                        <p><span>Customer Email: </span>{item.userEmail}</p>
                        <p><span>Customer Address: </span>{item.address}</p>
                        <p><span>Customer Payment Method: </span>{item.paymentType}</p>
                    </div>


                </div>
            )
        })}

      
    </div>
  )
}

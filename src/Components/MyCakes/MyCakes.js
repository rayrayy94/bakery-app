import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../../Config/Config';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function MyCakes() {

    const [myCakes, setMyCakes] = useState({});
    const auth = localStorage.getItem('userID');
    const navigate = useNavigate();

    useEffect(()=> {
        async function getData(){

            if(!localStorage.getItem('userID')){
                navigate('/');
            }

            axios.get(`${API.apiUri}/mycakes/${auth}`).then((res)=> {
                console.log(res);
                setMyCakes(res.data);
            }).catch((e)=>{
                console.log(e);
            })
        }
        getData();
    }, [auth, navigate]);


  return (
    <div className='mycakes-container'>
        <div className="mycakes-inner">
            <h1> Your Listings </h1>
            <p>Total Listings : <span className='count'>{myCakes.count}</span></p>
        </div>


        <br /><br />

        <div className='ordersContainer'>

        {myCakes?.listing?.map((item)=>{
            return(
                <div className='orders' key={item._id}>

                    <div className='imageContainer'>
                        <img src={item.cakeImage} alt='cake'/>
                    </div>

                    <div className='cakeInfo'>
                        <h2>Cake Details</h2>
                        <p><span>Cake Name: </span>{item.cakeName}</p>
                        <p><span>Cake Flavor: </span>{item.flavor}</p>
                        <p><span>Cake Type: </span>{item.cakeType}</p>
                        <p><span>Cake Price: </span>${item.price}</p>
                    </div>

                    <div className='customerInfo'>
                        <h2>Manage Listing</h2>
                        <button className='btn btn-signup btn-primary border-inner w-100 py-3'>Edit Details <FontAwesomeIcon icon={faPenToSquare} className='edit'/></button>
                        <button className='btn btn-signup btn-primary border-inner w-100 py-3'>Delete Cake <FontAwesomeIcon icon={faTrash} className='delete'/></button>
                    </div>


                </div>
            )
        })}

      
    </div>
      
    </div>
  )
}

import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import API from '../../Config/Config';
import { useEffect, useState } from 'react';
import './styles.css';
import shopImg from '../../img/shop-pic.webp';
import { useNavigate } from 'react-router-dom';

export default function ChefCakes() {

    let location = useLocation();
    let id = location.state.id;

    let navigate = useNavigate();

    const [myCakes, setMyCakes] = useState([]);


    useEffect(()=> {
      axios.get(`${API.apiUri}/mycakes/${id}`).then((res)=> {
        console.log(res.data);
        setMyCakes(res.data);
      }).catch((e)=>{
        console.log(e);
      })
    }, [id]);


    let ordersPage = (id) => {
      navigate('/ordercake', {state: {id:id}});
    }


  return (
    <>
      <div className='shop-container'>

        <img className='shop-img' src={shopImg} alt='shop-display' />

      


          {myCakes?.listing?.map((cake)=> {
            return(
              
              <div className='orders1' key={cake._id}>

                      <div className='imageContainer1'>
                          <img src={cake.cakeImage} alt='cake'/>
                      </div>

                      <div className='cakeInfo2'>
                          <h2>Cake Details</h2>
                          <p><span>Cake Name: </span>{cake.cakeName}</p>
                          <p><span>Cake Flavor: </span>{cake.flavor}</p>
                          <p><span>Cake Type: </span>{cake.cakeType}</p>
                          <p><span>Cake Price: </span>${cake.price}</p>
                      </div>

                      <div className='orderBTN'>
                          <button className='btn btn-primary order-btn' onClick={()=> ordersPage(cake._id)}>ORDER NOW</button>
                      </div>

                  </div>

                  
              
            )
          })}


      </div>
    </>
  )
}

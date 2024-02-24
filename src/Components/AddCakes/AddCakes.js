import React from 'react';
import './styles.css';
import { AddCakeSchema }  from './Validation/AddCakeSchema';
import { useFormik } from 'formik';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateNavItem } from '../../Redux/CounterSlice';
import { useDispatch } from 'react-redux';
import API from '../../Config/Config';

export default function AddCakes() {

  const dispatch = useDispatch();
   
  
  let navigate = useNavigate();

  const [cakeImage, setCakeImage] = useState('');
  const [auth, setAuth] = useState('');

  let initialValues = {
    cakeName: '',
    cakeFlavor: '',
    cakePrice: '',
    cakeType: '',
    file: ''
  };


  const {values, errors, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : AddCakeSchema,
    onSubmit : () => {
        addCake();
    }
  });

  useEffect(()=> {
    if(!localStorage.getItem('userID')){
        navigate('/');
    }

    if(localStorage.getItem('userID')){
        const id = localStorage.getItem('userID');
        setAuth(id);
    }

  }, [navigate]);



  function addCake(){
    let cakeName = document.getElementById('cakeName').value;
    let flavor = document.getElementById('cakeFlavor').value;
    let price = document.getElementById('cakePrice').value;
    let cakeType = document.getElementById('cakeType').value;

    let addCakeData = {
        cakeName,
        flavor,
        price,
        cakeType,
        cakeImage,
        sellerId: auth
    }

    axios.post(`${API.apiUri}/cake`, addCakeData).then(()=>{
        console.log('Cake Added');
        NotificationManager.success('Cake Added');
        setTimeout(() => {
            dispatch(updateNavItem('cakes'));
            navigate('/cakes');
        }, 2000);
    }).catch((e)=>{
        console.log(e)
        NotificationManager.error('Something Went Wrong');
    });

  }

      // base64 code
      function readFile(e) {
        let files = e.target.files;
        for (let i = 0; i < files.length; i++) {
          (function (file) {
            var reader = new FileReader();
            reader.onload = () => {
                setCakeImage(reader.result);
            };
            reader.readAsDataURL(file);
          })(files[i]);
        }
      }


      useEffect(()=> {
        document.getElementById('file').addEventListener('change', readFile);
      }, []);

  return (
    <div className='container add-cake'>
        <NotificationContainer />
        <h1>CAKE DETAILS</h1>

        <div className="row justify-content-center">
            <div className="col-lg-6">
                <form onSubmit={handleSubmit} className='cakeForm'>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <p><span className='hiddenItem'>:</span>{errors.cakeName}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeName' id='cakeName' placeholder="Cake Name" onChange={handleChange} onBlur={handleBlur} value={values.cakeName} style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-6">
                            <p><span className='hiddenItem'>:</span>{errors.cakeFlavor}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeFlavor' id='cakeFlavor' placeholder="Cake Flavor" onChange={handleChange} onBlur={handleBlur} value={values.cakeFlavor} style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-12">
                            <p><span className='hiddenItem'>:</span>{errors.cakePrice}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakePrice' id='cakePrice' placeholder="Price" onChange={handleChange} onBlur={handleBlur} value={values.cakePrice} style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-12">
                            <p><span className='hiddenItem'>:</span>{errors.cakeType}</p>
                            <select name="cakeType" id='cakeType' className='selectMenu' onChange={handleChange} onBlur={handleBlur} value={values.cakeType}>
                                <option value="default"> --- CHOOSE A CAKE TYPE ---</option>
                                <option value="smash">Smash Cake</option>
                                <option value="sponge">Sponge Cake</option>
                            </select>
                        </div>
                        <div className="col-sm-12">
                            <p><span className='hiddenItem'>:</span>{errors.file}</p>
                            <input type="file" name="file" id="file" accept='image/*' onChange={handleChange} onBlur={handleBlur} value={values.file} />

                            <div>
                                {cakeImage !== ''?
                                <>
                                <img src={cakeImage} alt='cake' className='cakeImage'/>
                                </>
                                : null}
                            </div>
                        </div>
                       
                        <div className="col-sm-12">
                            <button className="btn btn-primary border-inner w-100 py-3" type="submit">Add Cake</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

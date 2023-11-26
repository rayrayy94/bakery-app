import React from 'react';
import './styles.css';
import { AddCakeSchema }  from './Validation/AddCakeSchema';
import { useFormik } from 'formik';
import axios from 'axios';

export default function AddCakes() {

  let initialValues = {
    cakeName: '',
    cakeFlavor: '',
    cakePrice: '',
    cakeType: ''
  };


  const {values, errors, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : AddCakeSchema,
    onSubmit : () => {
        console.log('Cake Added');
    }
  });



  function addCake(){
    let cakeName = document.getElementById('cakeName').value;
    let flavor = document.getElementById('cakeFlavor').value;
    let price = document.getElementById('cakePrice').value;
    let cakeType = document.getElementById('cakeType').value;

    let addCakeData = {
        cakeName,
        flavor,
        price,
        cakeType
    }

    axios.post('http://localhost:8080/cake', addCakeData).then(()=>{
        console.log('Cake Added');
    }).catch((e)=>{
        console.log(e)
    });

  }

  return (
    <div className='container add-cake'>

        <h1>CAKE DETAILS</h1>

        <div className="row justify-content-center">
            <div className="col-lg-6">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <p>{errors.cakeName}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeName' id='cakeName' placeholder="Cake Name" onChange={handleChange} onBlur={handleBlur} value={values.cakeName} style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-6">
                            <p>{errors.cakeFlavor}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeFlavor' id='cakeFlavor' placeholder="Cake Flavor" onChange={handleChange} onBlur={handleBlur} value={values.cakeFlavor} style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-12">
                            <p>{errors.cakePrice}</p>
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakePrice' id='cakePrice' placeholder="Price" onChange={handleChange} onBlur={handleBlur} value={values.cakePrice} style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-12">
                            <p>{errors.cakeType}</p>
                            <select name="cakeType" id='cakeType' className='selectMenu' onChange={handleChange} onBlur={handleBlur} value={values.cakeType}>
                                <option value="default"> --- CHOOSE A CAKE TYPE ---</option>
                                <option value="smash">Smash Cake</option>
                                <option value="sponge">Sponge Cake</option>
                            </select>
                        </div>
                       
                        <div className="col-sm-12">
                            <button className="btn btn-primary border-inner w-100 py-3" type="submit" onClick={addCake}>Add Cake</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

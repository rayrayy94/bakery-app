import React from 'react';
import axios from 'axios';
import API from '../../Config/Config';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';

export default function EditCakes() {

  let navigate = useNavigate();


   let location = useLocation();
   let id = location.state.id;


    const [cakeImage, setCakeImage] = useState("");

    useEffect(()=> {
        async function getData(){
            await axios.get(`${API.apiUri}/cake/${id}`).then((res)=>{
                console.log(res.data);

                document.getElementById('cakeName').value = res.data.cakeName;
                document.getElementById('cakeFlavor').value = res.data.flavor;
                document.getElementById('cakePrice').value = res.data.price;
                document.getElementById('cakeType').value = res.data.cakeType;
                setCakeImage(res.data.cakeImage);

            }).catch((e)=>{
                console.log(e);
            });
        }
        getData();
    }, [id]);


    function editCakeDetails(e){
      e.preventDefault(); // had to add this and (e) above to quit giving error in console regarding the 'id'....ask about this error

      let cakeName = document.getElementById('cakeName').value;
      let flavor = document.getElementById('cakeFlavor').value;
      let price = document.getElementById('cakePrice').value;
      let cakeType = document.getElementById('cakeType').value;

      let updateInfo = {
        cakeName,
        flavor,
        price,
        cakeType,
        cakeImage
      }

      axios.patch(`${API.apiUri}/cake/${id}`, updateInfo).then(()=> {
        NotificationManager.success('Cake Item Updated!');
        setTimeout(()=> {
          navigate('/cakes');
        }, 2000);
      }).catch((e)=>{
        console.log(e);
        NotificationManager.error('Something Went Wrong!');
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



    function goBack(){
      navigate('/cakes');
    };



  return (
      <div className='container add-cake'>
        <NotificationContainer />

        <h1>Edit CAKE DETAILS</h1>

        <div className="row justify-content-center">
            <div className="col-lg-6">
                <form className='cakeForm'>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeName' id='cakeName' placeholder="Cake Name" style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakeFlavor' id='cakeFlavor' placeholder="Cake Flavor"  style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-12">
                            <input type="text" className="form-control bg-light border-0 px-4" name='cakePrice' id='cakePrice' placeholder="Price" style={{height: "55px"}} />
                        </div>
                        <div className="col-sm-12">
                            <select name="cakeType" id='cakeType' className='selectMenu'>
                                <option value="default"> --- CHOOSE A CAKE TYPE ---</option>
                                <option value="smash">Smash Cake</option>
                                <option value="sponge">Sponge Cake</option>
                            </select>
                        </div>
                        <div className="col-sm-12">
                            <input type="file" name="file" id="file" accept='image/*' onChange={readFile} />
                            <center >
                              <div>
                                  {cakeImage !== ''?
                                  <>
                                    <img src={cakeImage} alt='cake' className='cakeImage'/>
                                  </>
                                  : null}
                              </div>
                            </center>

                        </div>
                       <center>
                          <div className="col-sm-12">
                              <button className="btn btn-primary border-inner w-50 py-3 center my-3" onClick={editCakeDetails}>Edit Cake</button>
                          </div>

                          <div className="col-sm-12">
                              <button className="btn btn-primary border-inner w-50 py-3 center my-3" onClick={goBack}>Go Back</button>
                          </div>
                        </center>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

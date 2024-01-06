import axios from 'axios';
import React, { useEffect, useState, useReducer } from 'react';
import API from '../../Config/Config';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Switch from 'react-switch';
import Modal from 'react-modal';

export default function MyCakes() {

    const [myCakes, setMyCakes] = useState({});
    const auth = localStorage.getItem('userID');
    const navigate = useNavigate();
    const [update, setForceUpdate] = useReducer((x) => x + 1, 0);
    const [isOpen, setIsOpen] = useState(false);
    const [cakeId, setCakeId] = useState('');

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
    }, [auth, navigate, update]);

    function changeStatus(status, cakeId){
        if(status){
            axios.patch(`${API.apiUri}/cake/${cakeId}`, {availabilityStatus: false}).then((res)=> {
                console.log(res);
            }).catch((e)=>{
                console.log(e);
            })
        }
        else{
            axios.patch(`${API.apiUri}/cake/${cakeId}`, {availabilityStatus: true}).then((res)=> {
                console.log(res);
                NotificationManager.success('Availability Updated!');
            }).catch((e)=>{
                console.log(e);
                NotificationManager.error('Something went wrong')
            })
        }

        setForceUpdate();
    }

   
     function deleteCake(){
        axios.delete(`${API.apiUri}/cake/${cakeId}`).then(()=> {
            console.log('cake deleted!');
            NotificationManager.success('Cake Deleted!');
            setForceUpdate();
        }).catch((e) => {
            console.log(e);
            NotificationManager.error('Something Went Wrong!');
        });

        closeModal();
    };


    function editDetails(id){
        navigate('/editcakes', {state: {id: id}});
    };

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#2B2825',
          border: '5px solid #E88F2A',
          width: '50%',
          height: '30%', 
        },
        overlay: {
            backgroundColor: 'rgba(40,40,40,0.8)',
            zIndex: 999,
        },
      };



      function closeModal(){
        setIsOpen(false);
      };

      function openModal(id){
        setCakeId(id);
        setIsOpen(true);
      };


  return (
    <div className='mycakes-container'>
        <div className="mycakes-inner">
            <h1> Your Listings </h1>
            <p>Total Listings : <span className='count'>{myCakes.count}</span></p>
        </div>


        <br /><br />

        <div className='ordersContainer'>

            <NotificationContainer />

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
                        <button className='btn btn-signup btn-primary border-inner w-100 py-3' onClick={()=> editDetails(item._id)}>Edit Details <FontAwesomeIcon icon={faPenToSquare} className='edit'/></button>
                        <button className='btn btn-signup btn-primary border-inner w-100 py-3' onClick={() => openModal(item._id) }>Delete Cake <FontAwesomeIcon icon={faTrash} className='delete'/></button>
                        <h2 style={{color: item.availabilityStatus? "green" : "lightslategrey"}} >{item.availabilityStatus === true ? "Available" : "Unavailable"}</h2>
                        <Switch onChange={()=> changeStatus(item.availabilityStatus, item._id)} checked={item.availabilityStatus} />
                    </div>


                </div>
            )
        })}
        

      
    </div>

                
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal} //close modal clicking outside of modal anywhere on screen
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='btn-modal-container'>
                    <h2 className='modal-text'>Are you sure you want to delete this cake? </h2>
                    <button onClick={deleteCake} className='btn btn-primary btn-confirm'>YES</button>
                    <button onClick={closeModal} className='btn btn-primary btn-reject'>NO</button>

                </div>
            </Modal>
      
    </div>
  )
}

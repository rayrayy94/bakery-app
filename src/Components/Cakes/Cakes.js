import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import API from '../../Config/Config';
import './styles.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


export default function Cakes() {

    let navigate = useNavigate();

    const [cakes, setCakes] = useState([]);
    const [update, forceUpdate] = useReducer((x)=> x+1);
    const [isOpen, setIsOpen] = useState(false);
    const [cakeId, setCakeId] = useState('');
    const [tabName, setTabName] = useState('smash');

    useEffect(() => {
        async function getData() {
            await axios.get(`${API.apiUri}/togglecake/${tabName}`).then((res) => {
                console.log(res.data);
                setCakes(res.data);
            }).catch((e) => {
                console.log(e);
            })
        };

        getData();

    }, [update, tabName]);


    function deleteCake(){
        axios.delete(`${API.apiUri}/cake/${cakeId}`).then(()=> {
            console.log('cake deleted!');
            NotificationManager.success('Cake Deleted!');
            forceUpdate();
        }).catch((e) => {
            console.log(e);
            NotificationManager.error('Something Went Wrong!');
        });

        closeModal();
    };


    function editDetails(id){
        navigate('/editcakes', {state: {id: id}});
    };

    function orderCake(id){
        navigate('/ordercake', {state: {id: id}});
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
        <div className="container-fluid py-5">
            <NotificationContainer />


            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: "600px" }}>
                    <h2 className="text-primary font-secondary">Bakery Items</h2>
                    <h1 className="display-4 text-uppercase">Our Fresh Cakes</h1>
                </div>

                <center>
                    <div className='tab-view'>
                        <ul className="nav nav-pills d-inline-flex justify-content-around bg-dark text-uppercase border-inner p-4 mb-5">
                            <li className="nav-item">
                                <span className={tabName === 'smash' ? "nav-link text-white active" : "nav-link text-white"} onClick={()=> setTabName('smash')}>Smash Cakes</span>
                            </li>
                            <li className="nav-item">
                                <span className={tabName === 'sponge' ? "nav-link text-white active" : "nav-link text-white"} onClick={()=> setTabName('sponge')}>Sponge Cakes</span>
                            </li>
                        </ul>
                    </div>
                </center>


                <div className="row g-5">
                    {cakes.map((item) => {
                        return (
                            <div className="col-lg-4 col-md-6" key={item._id}>
                                <div className="team-item">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100 cakeDisplay" src={item.cakeImage} alt="cake"/>
                                        <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center justify-content-start">
                                                <button className='btn btn-primary btn-order' onClick={() => orderCake(item._id)}><FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-dark border-inner text-center p-4">
                                        <h4 className="text-uppercase text-primary">{item.cakeName}</h4>
                                        <p className="text-white m-0">Flavor: {item.flavor.toUpperCase()}</p>
                                        <p className="text-white m-0">Type: {item.cakeType.toUpperCase()}</p>
                                        <button className='btn btn-primary btn-price'>$ {item.price}</button>
                                        <button className='btn btn-primary btn-price' onClick={() => editDetails(item._id)}>Edit Details</button>
                                        <button className='btn btn-primary btn-price' onClick={() => openModal(item._id)}>Delete Cake</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
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

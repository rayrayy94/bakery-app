import React from 'react';
import './styles.css';
import { useEffect, useState } from 'react';
import API from '../../Config/Config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { tab } from '@testing-library/user-event/dist/tab';

export default function CustomerOrders() {



    let navigate = useNavigate();
    const id = localStorage.getItem('userID');

    const [orders, setOrders] = useState([]);
    const [tabView, setTabView] = useState('pending');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        async function getData(){
            await axios.get(`${API.apiUri}/customerorders/${id}`).then((res)=>{
                console.log(res.data);
                setOrders(res.data);
            }).catch((e)=>{
                console.log(e);
            });
        }
        getData();
    }, [id]);

    useEffect(()=> {
        if(!localStorage.getItem('userID')){
            navigate('/');
        }
      }, [navigate]);




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

      function openModal(){
        setIsOpen(true);
      };




  return (

    <>

        <center>
            <div className='tab-view tab-view-orders'>
                <ul className="nav nav-pills d-inline-flex justify-content-around bg-dark text-uppercase border-inner p-4 mb-5">
                    <li className="nav-item" onClick={()=> setTabView('pending')}>
                        <span className={tabView === 'pending' ? "nav-link text-white active" : "nav-link text-white"}>Order Requests</span>
                    </li>
                    <li className="nav-item" onClick={()=> setTabView('accepted')}>
                        <span className={tabView === 'accepted' ? "nav-link text-white active" : "nav-link text-white"}>Ongoing Orders</span>
                    </li>
                    <li className="nav-item" onClick={()=> setTabView('completed')}>
                        <span className={tabView === 'completed' ? "nav-link text-white active" : "nav-link text-white"}>Completed Orders</span>
                    </li>
                    <li className="nav-item" onClick={()=> setTabView('cancelled')}>
                        <span className={tabView === 'cancelled' ? "nav-link text-white active" : "nav-link text-white"}>Cancelled Orders</span>
                    </li>
                    <li className="nav-item" onClick={()=> setTabView('rejected')}>
                        <span className={tabView === 'rejected' ? "nav-link text-white active" : "nav-link text-white"}>Rejected Orders</span>
                    </li>
                </ul>
            </div>
        </center>

   


        <div className='ordersContainer'>      

             {orders.map((item)=>{

                if (
                (tabView === 'pending' && item.orderStatus === 'pending') ||
                (tabView === 'accepted' && item.orderStatus === 'accepted') ||
                (tabView === 'completed' && item.orderStatus === 'completed') ||
                (tabView === 'cancelled' && item.orderStatus === 'cancelled') ||
                (tabView === 'rejected' && item.orderStatus === 'rejected')
                )
            
                return(
                    <div className='orders' key={item._id}>

                        <div className='imageContainer'>
                            <img src={item.cakeImage} alt='cake'/>
                        </div>

                        <div className='customerInfo'>
                            <h2>Customer Information</h2>
                            <p><span>Customer Name: </span>{item.userName}</p>
                            <p><span>Customer Email: </span>{item.userEmail}</p>
                            <p><span>Customer Address: </span>{item.address}</p>
                            <p><span>Customer Payment Method: </span>{item.paymentType}</p>
                        </div> 

                        <div className='cakeInfo'>
                            <h2>Order Information</h2>
                            <p><span>Cake Name: </span>{item.cakeName}</p>
                            <p><span>Cake Type: </span>{item.cakeType}</p>
                            <p><span>Cake Price: </span>${item.price}</p>
                            <p><span>Order Status: </span><b style={{color: item.orderStatus === 'pending' ? 'yellow' : item.orderStatus === 'accepted' ? 'grey' : item.orderStatus === 'completed' ? 'green' : 'crimson'}}>{item.orderStatus}</b></p>

                            <p>
                            {item.orderStatus === 'pending' || item.orderStatus === 'accepted' ? 
                            <>
                                <button className='btn btn-primary btn-reject' onClick={openModal}>Cancel</button>
                            </>:
                            null
                            }
                        </p>

                        </div>

                    </div>
                )
                })} 
        </div>


        <div>

            {/* {tabView === 'pending'?
            <>
            
            </>
            :{tabView === 'accepted' ?
        <></>: null}} */}

                {tabView === 'pending' ? 
                <>
                    <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal} //close modal clicking outside of modal anywhere on screen
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='btn-modal-container'>
                        <h2 className='modal-text'>Are you sure you want to cancel this order? </h2>
                        <button className='btn btn-primary btn-confirm'>YES</button>
                        <button className='btn btn-primary btn-reject' onClick={closeModal}>NO</button>

                    </div>
                </Modal>
                </>:
                tabView === 'accepted' ?
                <>
                    <Modal
                isOpen={isOpen}
                onRequestClose={closeModal} //close modal clicking outside of modal anywhere on screen
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='btn-modal-container'>
                    <h2 className='modal-text'>Are you sure you want to cancel this order? There will be a 20% cancellation fee charged. </h2>
                    <button className='btn btn-primary btn-confirm'>YES</button>
                    <button className='btn btn-primary btn-reject' onClick={closeModal}>NO</button>

                </div>
            </Modal>
                </>: null
                }

                
            {/* <Modal
                isOpen={isOpen}
                onRequestClose={closeModal} //close modal clicking outside of modal anywhere on screen
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='btn-modal-container'>
                    <h2 className='modal-text'>Are you sure you want to delete this cake? </h2>
                    <button className='btn btn-primary btn-confirm'>YES</button>
                    <button className='btn btn-primary btn-reject' onClick={closeModal}>NO</button>

                </div>
            </Modal> */}
       
        </div>

    </>
  )
}

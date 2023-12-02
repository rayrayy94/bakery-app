import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../Config/Config';
import './styles.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';


export default function Cakes() {

    let navigate = useNavigate();

    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios.get(`${API.apiUri}/cake`).then((res) => {
                console.log(res.data);
                setCakes(res.data);
            }).catch((e) => {
                console.log(e);
            })
        };

        getData();

    }, []);


    function deleteCake(id){
        axios.delete(`${API.apiUri}/cake/${id}`).then(()=> {
            console.log('cake deleted!');
            NotificationManager.success('Cake Deleted!');
            setTimeout(()=> {
                navigate('/cakes');
                window.location.reload();
            },2000);
        }).catch((e) => {
            console.log(e);
            NotificationManager.error('Something Went Wrong!');
        })
    };


    function editDetails(id){
        navigate('/editcakes', {state: {id: id}});
    }


    return (
        <div className="container-fluid py-5">
            <NotificationContainer />

            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: "600px" }}>
                    <h2 className="text-primary font-secondary">Bakery Items</h2>
                    <h1 className="display-4 text-uppercase">Our Fresh Cakes</h1>
                </div>
                <div className="row g-5">
                    {cakes.map((item) => {
                        return (
                            <div className="col-lg-4 col-md-6" key={item._id}>
                                <div className="team-item">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid w-100 cakeDisplay" src={item.cakeImage} alt="cake"/>
                                        <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center justify-content-start">
                                                <button className='btn btn-primary btn-order'><FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-dark border-inner text-center p-4">
                                        <h4 className="text-uppercase text-primary">{item.cakeName}</h4>
                                        <p className="text-white m-0">Flavor: {item.flavor.toUpperCase()}</p>
                                        <p className="text-white m-0">Type: {item.cakeType.toUpperCase()}</p>
                                        <button className='btn btn-primary btn-price'>$ {item.price}</button>
                                        <button className='btn btn-primary btn-price' onClick={() => editDetails(item._id)}>Edit Details</button>
                                        <button className='btn btn-primary btn-price' onClick={() => deleteCake(item._id)}>Delete Cake</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

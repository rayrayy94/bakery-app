import React from 'react';
// import image1 from '../../img/team-1.jpg';
// import image2 from '../../img/team-2.jpg';
// import image3 from '../../img/team-3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../Config/Config';
import { useNavigate } from 'react-router-dom';
import chefImage from '../../img/chef.jpeg';
import './styles.css';


export default function Team() {

    const navigate = useNavigate();

    const [info, setInfo] = useState([]);
 

    useEffect(()=> {
        axios.get(`${API.apiUri}/sellerAccountType`).then((res)=>{
            console.log(res);
            setInfo(res.data);
        }).catch((e)=>{
            console.log(e);
        })
    }, []);


    function chefListing(id){
        navigate('/chefcakes', {state: {id: id}});
    }


  return (
    // <!-- Team Start -->
    <div className="container-fluid py-5">
        <div className="container">
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: "600px"}}>
                <h2 className="text-primary font-secondary">Team Members</h2>
                <h1 className="display-4 text-uppercase">Our Master Chefs</h1>
            </div>

            <div className="row g-5">

                 {info.map((users)=> {
                    if(users !== null){
                        return(
                            <div className="col-lg-4 col-md-6" key={users._id}>
                                <div>
                                    <div className="team-item">
                                        <div className="position-relative overflow-hidden">
                                               <img className='img-fluid w-100 img' src={users.userImage ? users.userImage : chefImage} alt='users'/>
                                               
                                                <div class="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                                    <div class="d-flex align-items-center justify-content-start">
                                                        <button className='btn btn-primary' onClick={()=> chefListing(users._id)}>Go to selection</button>
                                                    </div>
                                                </div>

                                        </div>
                                        <div className="bg-dark border-inner text-center p-4">
                                            <h4 className="text-uppercase text-primary">Chef: {users.firstName}</h4>
                                            <p className="text-white m-0">Designation</p>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        )

                    }
                    else{
                        return null;
                    }
                })} 

                {/* <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={image1} alt="chef 1" />
                        </div>
                        <div className="bg-dark border-inner text-center p-4">
                            <h4 className="text-uppercase text-primary">Full Name</h4>
                            <p className="text-white m-0">Designation</p>
                        </div>
                    </div>
                </div> */}


                {/* <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={image2} alt="chef 2" />
                            <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                            </div>
                        </div>
                        <div className="bg-dark border-inner text-center p-4">
                            <h4 className="text-uppercase text-primary">Full Name</h4>
                            <p className="text-white m-0">Designation</p>
                        </div>
                    </div>
                </div> */}


                {/* <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={image3} alt="chef 3" />
                            <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                            </div>
                        </div>
                        <div className="bg-dark border-inner text-center p-4">
                            <h4 className="text-uppercase text-primary">Full Name</h4>
                            <p className="text-white m-0">Designation</p>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    </div>
  );
}

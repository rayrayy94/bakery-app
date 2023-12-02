import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from '../Components/CommonComponents/TopBar/TopBar';
import NavBar from '../Components/CommonComponents/NavBar/NavBar';
import AboutUs from '../Components/AboutUs/AboutUs';
import Footer from '../Components/CommonComponents/Footer/Footer';
import Header from '../Components/CommonComponents/Header/Header';
import Service from '../Components/Service/Service';
import Contact from '../Components/Contact/Contact';
import Team from '../Components/Team/Team';
import Offer from '../Components/Offer/Offer';
import SubHeader from '../Components/CommonComponents/SubHeader/SubHeader';
import AddCakes from '../Components/AddCakes/AddCakes';
import Cakes from '../Components/Cakes/Cakes';
import Testimonials from '../Components/Testimonials/Testimonials';
import EditCakes from '../Components/EditCakes/EditCakes';

export default function Path() {
  return (
    <div>
        <BrowserRouter>
            <TopBar />
            <NavBar />
                <Routes>
                    <Route path='/' element={<> <Header /> <Service /> <Team /> <Offer /> <Testimonials /> </>} />
                    <Route path='/aboutus' element={<> <SubHeader headerName='About Us' /> <AboutUs /> </>} />
                    <Route path='/contact' element={<> <SubHeader headerName='Contact' /> <Contact /> </>} />
                    <Route path='/addcake' element={<> <SubHeader headerName='Add A Cake' /> <AddCakes /> </>} />
                    <Route path='/cakes' element={<> <SubHeader headerName='Specialty Cakes' /> <Cakes /> </>} />
                    <Route path='/editcakes' element={<> <SubHeader headerName='Edit Cake Details' /> <EditCakes /> </>} />
                </Routes>
            <Footer />
        </BrowserRouter>
      
    </div>
  )
}

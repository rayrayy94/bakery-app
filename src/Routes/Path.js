import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from '../Components/CommonComponents/TopBar/TopBar';
import NavBar from '../Components/CommonComponents/NavBar/NavBar';
import AboutUs from '../Components/AboutUs/AboutUs';
import Footer from '../Components/CommonComponents/Footer/Footer';
import Hero from '../Components/CommonComponents/Header/Header';
import Service from '../Components/Service/Service';
import Contact from '../Components/Contact/Contact';
import Team from '../Components/Team/Team';

export default function Path() {
  return (
    <div>
        <BrowserRouter>
            <TopBar />
            <NavBar />
                <Routes>
                    <Route path='/' element={<> <Hero /> <Team /> <Service /> </>} />
                    <Route path='/aboutus' element={<> <AboutUs /> </>} />
                    <Route path='/contact' element={<> <Contact /> </>} />
                </Routes>
            <Footer />
        </BrowserRouter>
      
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './styles.css';
import { Autoplay, EffectFade } from 'swiper/modules';

// git push test comment


export default function Hero() {
  return (

    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide><div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
              <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                  <h1 className="font-secondary text-primary mb-4">Super Crispy</h1>
                  <h1 className="display-1 text-uppercase text-white mb-4">CakeZone</h1>
                  <h1 className="text-uppercase text-white">The Best Cake In London</h1>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                    <Link to="/aboutus" className="btn btn-primary border-inner py-3 px-5 me-5">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header1">
            <div className="container py-5">
              <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                  <h1 className="font-secondary text-primary mb-4">Super Crispy</h1>
                  <h1 className="display-1 text-uppercase text-white mb-4">CakeZone</h1>
                  <h1 className="text-uppercase text-white">The Best Cake In London</h1>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                    <Link to="/aboutus" className="btn btn-primary border-inner py-3 px-5 me-5">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header2">
            <div className="container py-5">
              <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                  <h1 className="font-secondary text-primary mb-4">Super Crispy</h1>
                  <h1 className="display-1 text-uppercase text-white mb-4">CakeZone</h1>
                  <h1 className="text-uppercase text-white">The Best Cake In London</h1>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                    <Link to="/aboutus" className="btn btn-primary border-inner py-3 px-5 me-5">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

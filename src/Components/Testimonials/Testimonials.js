import React from 'react';
import test1 from '../../img/testimonial-1.jpg';
import test2 from '../../img/testimonial-2.jpg';
import test3 from '../../img/testimonial-3.jpg';
import test4 from '../../img/testimonial-4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Testimonials() {
    return (

        <>


            <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: "600px" }}>
                <h2 className="text-primary font-secondary">Testimonial</h2>
                <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container-fluid py-5">
                        <div className="container">
                            <div className="testimonial-item bg-dark text-white border-inner p-5">
                                <div className="d-flex align-items-center mb-3">
                                    <img className="img-fluid flex-shrink-0" src={test1} style={{ width: "60px", height: "60px" }} alt='customer1' />
                                    <div className="ps-3">
                                        <h4 className="text-primary text-uppercase mb-1">Sarah Johnson</h4>
                                        <span>Marketing Executive</span>
                                    </div>
                                </div>
                                <p className="mb-0">The bakery website made my celebrations extra special with its delicious treats and seamless service!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container-fluid py-5">
                        <div className="container">
                            <div className="testimonial-item bg-dark text-white border-inner p-5">
                                <div className="d-flex align-items-center mb-3">
                                    <img className="img-fluid flex-shrink-0" src={test2} style={{ width: "60px", height: "60px" }} alt='customer2' />
                                    <div className="ps-3">
                                        <h4 className="text-primary text-uppercase mb-1">Michael Rodriguez</h4>
                                        <span>Software Developer</span>
                                    </div>
                                </div>
                                <p className="mb-0">I love the convenience and variety offered by the bakery website—every bite is a delightful experience!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container-fluid py-5">
                        <div className="container">
                            <div className="testimonial-item bg-dark text-white border-inner p-5">
                                <div className="d-flex align-items-center mb-3">
                                    <img className="img-fluid flex-shrink-0" src={test3} style={{ width: "60px", height: "60px" }} alt='customer3' />
                                    <div className="ps-3">
                                        <h4 className="text-primary text-uppercase mb-1">Emily Thompson</h4>
                                        <span>Graphic Designer</span>
                                    </div>
                                </div>
                                <p className="mb-0">Exceptional service and mouthwatering pastries; the bakery website is my go-to for all things sweet!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container-fluid py-5">
                        <div className="container">
                            <div className="testimonial-item bg-dark text-white border-inner p-5">
                                <div className="d-flex align-items-center mb-3">
                                    <img className="img-fluid flex-shrink-0" src={test4} style={{ width: "60px", height: "60px" }} alt='customer4' />
                                    <div className="ps-3">
                                        <h4 className="text-primary text-uppercase mb-1">Daniel Lewis</h4>
                                        <span>Fitness Trainer</span>
                                    </div>
                                </div>
                                <p className="mb-0">From custom cakes to quick deliveries, the bakery website exceeds expectations, making every occasion memorable.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

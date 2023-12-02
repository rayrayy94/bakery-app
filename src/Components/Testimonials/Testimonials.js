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


            <div class="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: "600px" }}>
                <h2 class="text-primary font-secondary">Testimonial</h2>
                <h1 class="display-4 text-uppercase">Our Clients Say!!!</h1>
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
                    <div class="container-fluid py-5">
                        <div class="container">
                            <div class="testimonial-item bg-dark text-white border-inner p-5">
                                <div class="d-flex align-items-center mb-3">
                                    <img class="img-fluid flex-shrink-0" src={test1} style={{ width: "60px", height: "60px" }} alt='customer1' />
                                    <div class="ps-3">
                                        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                                <p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="container-fluid py-5">
                        <div class="container">
                            <div class="testimonial-item bg-dark text-white border-inner p-5">
                                <div class="d-flex align-items-center mb-3">
                                    <img class="img-fluid flex-shrink-0" src={test2} style={{ width: "60px", height: "60px" }} alt='customer2' />
                                    <div class="ps-3">
                                        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                                <p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="container-fluid py-5">
                        <div class="container">
                            <div class="testimonial-item bg-dark text-white border-inner p-5">
                                <div class="d-flex align-items-center mb-3">
                                    <img class="img-fluid flex-shrink-0" src={test3} style={{ width: "60px", height: "60px" }} alt='customer3' />
                                    <div class="ps-3">
                                        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                                <p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="container-fluid py-5">
                        <div class="container">
                            <div class="testimonial-item bg-dark text-white border-inner p-5">
                                <div class="d-flex align-items-center mb-3">
                                    <img class="img-fluid flex-shrink-0" src={test4} style={{ width: "60px", height: "60px" }} alt='customer4' />
                                    <div class="ps-3">
                                        <h4 class="text-primary text-uppercase mb-1">Client Name</h4>
                                        <span>Profession</span>
                                    </div>
                                </div>
                                <p class="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

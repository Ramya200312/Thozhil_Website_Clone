import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import './SwiperComponent.css'; 

import myImage1 from './Asserts/static/14.jpg';
import myImage2 from './Asserts/static/15.png';
import myImage3 from './Asserts/static/20.jpg';
import myImage4 from './Asserts/static/21.jpg';
import myImage5 from './Asserts/static/3.jpg';
import myImage6 from './Asserts/static/bltzwork.jpeg';
import myImage7 from './Asserts/static/17.jpg';
import myImage8 from './Asserts/static/22.jpg';
import myImage9 from './Asserts/static/6.jpg';



const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        spaceBetween={16}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        modules={[Pagination, Navigation, Autoplay]} 
        className="mySwiper"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide className="swiper-slide"> <img src={myImage5} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage7} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage3} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage4} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage5} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage6} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage7} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage1} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage2} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage3} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage4} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage5} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage6} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage7} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage8} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage9} alt="Descriptive alt text" /></SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import img4 from "../../../assets/Banner/1.jpg"
import img5 from "../../../assets/Banner/baseball.jpg"
import img3 from "../../../assets/Banner/basketball.jpg"
import img2 from "../../../assets/Banner/kid.jpg"
import img6 from "../../../assets/Banner/football.jpg"
import img1 from "../../../assets/Banner/tennis.jpg"

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img className='w-full' src={img1} alt="" />
                    <div className='absolute top-[10%] lg:top-[40%] lg:left-[30%] text-center custom-banner-bg text-white'>
                        <h2 className='text-lg lg:text-4xl font-bold uppercase'>Maximize Your Potential</h2>
                        <p className='text-sm lg:text-xl uppercase font-semibold'>Athletic Programs For The Serious Athletes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='w-full' src={img2} alt="" />
                    <div className='absolute top-[10%] lg:top-[40%] lg:left-[30%] text-center custom-banner-bg text-white'>
                        <h2 className='text-lg lg:text-4xl font-bold uppercase'>Maximize Your Potential</h2>
                        <p className='text-sm lg:text-xl uppercase font-semibold'>Athletic Programs For The Serious Athletes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='w-full' src={img3} alt="" />
                    <div className='absolute top-[10%] lg:top-[40%] lg:left-[30%] text-center custom-banner-bg text-white'>
                        <h2 className='text-lg lg:text-4xl font-bold uppercase'>Maximize Your Potential</h2>
                        <p className='text-sm lg:text-xl uppercase font-semibold'>Athletic Programs For The Serious Athletes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='w-full' src={img4} alt="" />
                    <div className='absolute top-[10%] lg:top-[40%] lg:left-[30%] text-center custom-banner-bg text-white'>
                        <h2 className='text-lg lg:text-4xl font-bold uppercase'>Maximize Your Potential</h2>
                        <p className='text-sm lg:text-xl uppercase font-semibold'>Athletic Programs For The Serious Athletes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='w-full' src={img5} alt="" />
                    <div className='absolute top-[10%] lg:top-[40%] lg:left-[30%] text-center custom-banner-bg text-white'>
                        <h2 className='text-lg lg:text-4xl font-bold uppercase'>Maximize Your Potential</h2>
                        <p className='text-sm lg:text-xl uppercase font-semibold'>Athletic Programs For The Serious Athletes</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='w-full' src={img6} alt="" />
                    <div className='absolute top-[10%] lg:top-[40%] lg:left-[30%] text-center custom-banner-bg text-white'>
                        <h2 className='text-lg lg:text-4xl font-bold uppercase'>Maximize Your Potential</h2>
                        <p className='text-sm lg:text-xl uppercase font-semibold'>Athletic Programs For The Serious Athletes</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;
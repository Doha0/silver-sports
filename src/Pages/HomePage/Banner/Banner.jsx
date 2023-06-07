import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import img2 from "../../../assets/Banner/1.jpg"
import img5 from "../../../assets/Banner/baseball.jpg"
import img3 from "../../../assets/Banner/basketball.jpg"
import img4 from "../../../assets/Banner/kid.jpg"
import img6 from "../../../assets/Banner/football.jpg"
import img1 from "../../../assets/Banner/tennis.jpg"

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={img6} alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;
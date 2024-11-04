"use client";
import React from 'react'
import Slider from 'react-slick';
import style from './css/mainSlider.module.css'
import slider1 from '../../../public/assets/slider/slider1.webp'
import slider2 from '../../../public/assets/slider/slider2.webp'
import slider3 from '../../../public/assets/slider/slider3.webp'
import slider4 from '../../../public/assets/slider/slider4.webp'
import slider5 from '../../../public/assets/slider/slider5.webp'

import Image from 'next/image';
export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
        <Slider {...settings}>
          <div>
            <Image height="auto" width='100%'  alt='oil' src={slider1}/>
          </div>
          <div>
            <Image height="auto" width='100%'  alt='oil' src={slider2}/>
          </div>
          <div>
            <Image height="auto" width='100%'  alt='oil' src={slider3}/>
          </div>
          <div>
            <Image height="auto" width='100%'  alt='oil' src={slider4}/>
          </div>
          <div>
            <Image height="auto" width='100%'  alt='oil' src={slider5}/>
          </div>

        </Slider>
        </div>
    </div>
  )
}

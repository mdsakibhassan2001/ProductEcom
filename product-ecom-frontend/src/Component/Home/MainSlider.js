"use client";
import React from 'react'
import Slider from 'react-slick';
import style from './css/mainSlider.module.css'
import oil from '../../../public/assets/1710569991103_Olive-Oils-Land.webp'
import roxanne from '../../../public/assets/Roxanne.webp'
import cold_care from '../../../public/assets/1710570260155_Gold-Care.webp'
import { CiCircleChevRight,CiCircleChevLeft } from "react-icons/ci";
import Image from 'next/image';
export default function MainSlider() {
  var settings = {
    dots: true,
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
            <Image height="auto" width='100%'  alt='oil' src={oil}/>
          </div>
          <div>
            <Image alt='roxanne' height="auto" width='100%' src={roxanne}/>
          </div>
          <div>
            <Image alt='cold_care' height="auto" width='100%' src={cold_care}/>
          </div>
        </Slider>
        </div>
    </div>
  )
}

"use client";
import React from "react";
import Slider from "react-slick";
import style from "./css/mainSlider.module.css";
import Image from "next/image";
export default function MainSlider() {
  const mainSliderContent = [
    { img: "/assets/slider/slider1.png" },
    { img: "/assets/slider/slider2.png" },
    { img: "/assets/slider/slider3.png" },
    { img: "/assets/slider/slider4.png" },
    { img: "/assets/slider/slider5.png" },
    { img: "/assets/slider/slider6.png" },
    { img: "/assets/slider/slider7.png" },
    { img: "/assets/slider/slider8.png" },
    { img: "/assets/slider/slider9.png" },
    { img: "/assets/slider/slider10.png" },
  ];
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
          {mainSliderContent.map((item, index) => {
            return (
              <div key={index} className={style.image_wrapper}>
                <Image fill alt="oil" src={item.img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

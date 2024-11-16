
import React from 'react'
import Link from 'next/link'
import style from "./css/menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMenuBar } from "@/Redux/features/productCard/ProductCardSlice";
import Image from "next/image";
export default function Menu() {
  const menuBar = useSelector((state) => state.productCard.menuBar);
  const dispatch = useDispatch();
  const category = [
    {
      name: "Electronics",
      link: "",
      image: "/assets/electronic/PHOTO-2024-11-14-22-53-11.jpg",
    },
    {
      name: "Fashion",
      link: "",
      image: "/assets/wool_cap/PHOTO-2024-11-14-22-08-52.jpg",
    },
    {
      name: "Mobiles",
      link: "",
      image: "/assets/phone/PHOTO-2024-11-14-22-26-17.jpg",
    },
    {
      name: "Grocery",
      link: "",
      image: "/assets/grocery/PHOTO-2024-11-14-22-43-36.jpg",
    },
    {
      name: "Watch",
      link: "",
      image: "/assets/watch/PHOTO-2024-11-14-20-54-47.jpg",
    },
    {
      name: "Electric Tricycle",
      link: "",
      image: "/assets/electric_tricycle/PHOTO-2024-11-14-22-56-56.jpg",
    },
    {
      name: "Earbuds",
      link: "",
      image: "/assets/earbuds/PHOTO-2024-11-14-21-04-34.jpg",
    },
    {
      name: "Bag",
      link: "",
      image: "/assets/bag/PHOTO-2024-11-14-22-10-21.jpg",
    },
    {
      name: "Battery",
      link: "",
      image: "/assets/battery/PHOTO-2024-11-14-22-58-19.jpg",
    },
  ];
  function onVoderlayClick() {
    dispatch(setMenuBar(false));
  }
  return (
    <>
      {menuBar && (
        <div onClick={onVoderlayClick} className={style.overlay}></div>
      )}
      <div
        className={
          menuBar
            ? `${style.show_mobile_menu} ${style.wrapper}`
            : `${style.hide_mobile_menu} ${style.wrapper}`
        }
      >
        <div className={style.holder}>
          <ul>
            {category?.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.link}>
                    <small className={style.image_wrapper}>
                      <Image src={item.image} fill />
                    </small>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

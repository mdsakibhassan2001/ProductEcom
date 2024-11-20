
"use client";
import React, { useEffect } from "react";
import style from "./css/productCard.module.css";
import Link from "next/link";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoStarHalf, IoStar } from "react-icons/io5";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setCardShowPop,
  setShowCard,
} from "@/Redux/features/productCard/ProductCardSlice";
export default function ProductCard({ all_product }) {
  const dispatch = useDispatch();
  const cardValue = useSelector((state) => state.productCard.cardValue);
  const onAddToBagClick = (item) => {
    dispatch(setShowCard([...cardValue, item]));
    window.localStorage.setItem(
      "cardValue",
      JSON.stringify([...cardValue, item])
    );
    dispatch(setCardShowPop(true));
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {all_product.map((item, index) => {
        return (
          <div key={index} className={style.card}>
            <Link href="/" className={style.card_head}>
              <div className={style.image_wrapper}>
                <Image fill alt={item.name} src={item.image} />
              </div>
            </Link>
            <div className={style.card_body}>
              <div className={style.title}>
              {item.discount_price > 0 ? (
                  <small className={style.parcent}>{((item.price - item.discount_price) / item.price * 100).toFixed(2)}% off</small>

                ) : (
                  <small>0.00% off</small>
                )}
                <small className={style.star_icon}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStarHalf />
                  <IoStarHalf />
                </small>
              </div>
              <Link href="/">{item.name.slice(0, 58)}</Link>
              <div className={style.price_wrapper}>
                {item.discount_price > 0 ? (
                  <span className={style.offer_price}>
                    <FaBangladeshiTakaSign />
                    {item.discount_price+".00"}
                  </span>
                ) : (
                  ""
                )}
                <span className={item.discount_price > 0 ? style.price : style.offer_price}>
                  <FaBangladeshiTakaSign />
                  {item.price+".00"}{" "}
                </span>
               
              </div>
            </div>
            <div className={style.card_footer}>
              <div className={style.button_wrapper}>
                <button className={style.wishlist}>
                  <FaHeart />
                </button>
                <button
                  onClick={() => onAddToBagClick(item)}
                  className={style.addtobag}
                >
                  {" "}
                  Add To Bag
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

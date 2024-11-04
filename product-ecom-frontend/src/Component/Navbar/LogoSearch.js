"use client";
import React, { useEffect, useState } from "react";
import style from "./css/logoSearch.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setCardShowPop, setShowCard } from "@/Redux/features/productCard/ProductCardSlice";
import CardProduct from "../CardProduct/CardProduct";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/assets/btb24_logo.png'
export default function LogoSearch() {
  const dispatch = useDispatch();
  const cardShowPop=useSelector((state)=>state.productCard.cardShowPop);
  useEffect(() => {
    const cardValue = window.localStorage.getItem("cardValue");
    const finalItems = cardValue ? JSON.parse(cardValue) : [];
    dispatch(setShowCard(finalItems));
    window.localStorage.setItem("cardValue", JSON.stringify(finalItems));
    console.log(cardShowPop)
  }, [dispatch]);
  const card_item = useSelector((state) => state.productCard.cardValue);
  function onCardClick(){
    dispatch(setCardShowPop(true));
    document.body.style.overflow = 'hidden';
  }
  return (
    <div className={style.wrapper}>
      {cardShowPop ? (
        <CardProduct/>
      ) : (
        ""
      )}
      <div className={style.holder}>
        <div className={style.logo_wrapper}>
          <Link href="/"><Image alt="logo" src={logo}/></Link>
        </div>
        <div className={style.search_wrapper}>
          <input type="search" placeholder="Enter your search item" />
          <button>
            <IoSearchOutline />
          </button>
        </div>
        <div className={style.login_wrapper}>
          <button onClick={onCardClick}>
            <small>{card_item.length}</small>
            <IoCartOutline />
          </button>
          <button>
            <FaCircleUser /> Login
          </button>
        </div>
      </div>
    </div>
  );
}

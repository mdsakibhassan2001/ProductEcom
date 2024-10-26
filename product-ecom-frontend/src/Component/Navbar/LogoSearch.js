"use client";
import React, { useEffect, useState } from "react";
import style from "./css/logoSearch.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setShowCard } from "@/Redux/features/productCard/ProductCardSlice";
import CardProduct from "../CardProduct/CardProduct";
export default function LogoSearch() {
  const [showCardPop, setShowCardPop] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const cardValue = window.localStorage.getItem("cardValue");
    const finalItems = cardValue ? JSON.parse(cardValue) : [];
    dispatch(setShowCard(finalItems));
    window.localStorage.setItem("cardValue", JSON.stringify(finalItems));
  }, [dispatch]);
  const card_item = useSelector((state) => state.productCard.cardValue);
  return (
    <div className={style.wrapper}>
      {showCardPop ? (
        <CardProduct card_item={card_item} setShowCardPop={setShowCardPop} />
      ) : (
        ""
      )}
      <div className={style.holder}>
        <div className={style.logo_wrapper}>
          <h2>Product Ecom</h2>
        </div>
        <div className={style.search_wrapper}>
          <input type="search" placeholder="Enter your search item" />
          <button>
            <IoSearchOutline />
          </button>
        </div>
        <div className={style.login_wrapper}>
          <button>
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

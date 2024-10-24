'use client'
import React from 'react'
import style from './css/logoSearch.module.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
export default function LogoSearch() {
    const card_item = useSelector((state) => state.productCard.cardValue);
    console.log(card_item)
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
            <div className={style.logo_wrapper}>
                <h2>Product Ecom</h2>
            </div>
            <div className={style.search_wrapper}>
                <input type='search' placeholder='Enter your search item'/>
                <button><IoSearchOutline /></button>
            </div>
            <div className={style.login_wrapper}>
                <button><small></small><IoCartOutline /></button>
                <button><FaCircleUser /> Login</button>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import style from './css/productCard.module.css'
import Link from 'next/link'
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoStarHalf,IoStar } from "react-icons/io5";
import Image from 'next/image';
export default function ProductCard({productItem}) {
  return (
        <>
        {
            productItem.map((item,index)=>{
            return  <div key={index} className={style.card}>
              <Link href="/" className={style.card_head}>
                  <Image alt="#" src={item.image}/>
              </Link>
              <div className={style.card_body}>
                  <div className={style.title}><small>Just For Baby</small><small className={style.star_icon}><IoStar /><IoStar /><IoStar /><IoStarHalf /><IoStarHalf /></small></div>
                  <Link href="/">{item.title}</Link>
                  <div className={style.price_wrapper}>
                    <span className={style.offer_price}><FaBangladeshiTakaSign />{item.offer_price}</span> <span className={style.price}><FaBangladeshiTakaSign />{item.price} </span><small>{item.offer_percent}% off</small>
                  </div>
              </div>
              <div className={style.card_footer}>
                 <div className={style.button_wrapper}>
                     <button className={style.wishlist}><FaHeart /></button>
                    <button className={style.addtobag}> Add Tob Bag</button>
                 </div>
              </div>
          </div>
            })
          }
        </>
    )
}

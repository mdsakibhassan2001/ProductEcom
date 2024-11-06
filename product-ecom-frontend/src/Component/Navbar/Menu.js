import React from 'react'
import style from './css/menu.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import {setMenuBar } from "@/Redux/features/productCard/ProductCardSlice";
export default function Menu() {
  const menuBar=useSelector((state)=>state.productCard.menuBar);
  const dispatch=useDispatch()
  const category=[
    {name:"Electronics",link:""},
    {name:"Fashion",link:""},
    {name:"Gifts",link:""},
    {name:"House Products",link:""},
    {name:"Industrial Machinery",link:""},
    {name:"ewellery & Watch",link:""},
    {name:"Printing",link:""},
  ]
  function onVoderlayClick(){
    dispatch(setMenuBar(false));
  }
  return (
      menuBar&& <>
        <div onClick={onVoderlayClick} className={style.overlay}></div>
        <div className={style.wrapper}>
            <div className={style.holder}>
                <ul>
                  {
                    category?.map((item,index)=>{
                      return <li key={index}><Link  href={item.link}>{item.name}</Link></li>
                    })
                  }
                </ul>
            </div>
        </div>
      </>
   
  )
}

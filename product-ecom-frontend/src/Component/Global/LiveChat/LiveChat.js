"use client"
import React, { useState } from 'react'
import style from './liveChat.module.css'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
export default function LiveChat() {
    const [close,setClose]=useState(true)
    function onChatClick(){
        setClose(false)
    }
    function onCloseClick(){
        setClose(true)
    }
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
            <div className={style.link_wrapper}>
                {
                   close?"":<div className={style.social_wrapper}>
                   <Link className={style.facebook} href={"https://anayase.com/olive-oil"}><FaFacebookMessenger /></Link>
                   <Link className={style.phone} href={""}><FaPhone /></Link>
                   <Link className={style.whatsapp} href={""}><FaWhatsapp /></Link>
                   </div>   
                }
             
                <div className={style.click_link}>
                   {close? <button onClick={onChatClick} className={style.chat}><IoChatbubbleEllipsesOutline /></button>  :<button onClick={onCloseClick} className={style.close} ><IoClose /></button> } 
                      
                </div>
            
            </div>
           
        </div>
    </div>
  )
}

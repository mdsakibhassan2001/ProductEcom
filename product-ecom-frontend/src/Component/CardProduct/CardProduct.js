import React from "react";
import style from "./css/cardProduct.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { setShowCard,setCardShowPop } from "@/Redux/features/productCard/ProductCardSlice";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiIndeterminateCircleLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
export default function CardProduct() {
  const dispatch=useDispatch()
  const card_item = useSelector((state) => state.productCard.cardValue);
  function onCloseClick(){
    dispatch(setCardShowPop(false))
    document.body.style.overflow = 'auto';
  }
 function onCardItemDelete(item){
    const items=card_item.filter((fitem)=>{
      if(fitem.id===item.id){
      }else{
          return fitem;
      }
    })
    dispatch(setShowCard(items))
    window.localStorage.setItem("cardValue", JSON.stringify(items));
 }
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        <div className={style.head_wrapper}>
          <h3>Your Cart</h3>
          <button onClick={onCloseClick}>
             <VscChromeClose />
          </button>
        </div>
        <div className={style.body_wrapper}>
        {card_item.map((item,index)=>{
           return <div key={index} className={style.item_wrapper}>
            <div className={style.image_wrapper}>
              <Image src={item.image}/>
            </div>
            <div className={style.text_wrapper}>
                <div className={style.title_wrapper}>
                  <p>{item.title}</p>
                  <button onClick={()=>onCardItemDelete(item)}><VscChromeClose /></button>
                </div>
                <div className={style.price_wrapper}>
                  <p><span><FaBangladeshiTakaSign />{item.price}</span><span> <FaBangladeshiTakaSign />{item.offer_price}</span></p>
                  <div className={style.increment_button}>
                    <button><RiIndeterminateCircleLine /></button><span>2</span><button><AiOutlinePlusCircle /></button>
                </div>
                </div>
            </div>
            
          </div>
        })}
        </div>
       <div className={style.footer_wrapper}>
           <div className={style.total_price_wrapper}>
              <div className={style.total_price_holder}>
                <span>Sub Total</span>-<small><FaBangladeshiTakaSign /> 13410</small>
              </div>
              <div className={style.total_price_holder}>
                <span>Discount</span>-<small><FaBangladeshiTakaSign /> 380</small>
              </div>
              <div className={style.total_price_holder}>
                <span>Grand Total</span>-<small><FaBangladeshiTakaSign /> 13030</small>
              </div>
          </div>
            <div className={style.button_wrapper}>
              <button>View cart</button>
              <button>Checkout</button>
            </div>
        </div>
          
      </div>
    </div>
  );
}

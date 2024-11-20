import React, { useEffect, useState } from "react";
import style from "./css/cardProduct.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowCard,
  setCardShowPop,
} from "@/Redux/features/productCard/ProductCardSlice";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiIndeterminateCircleLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
export default function CardProduct() {
  const [subTotal, setSubTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  const card_item = useSelector((state) => state.productCard.cardValue);

  function onCloseClick() {
    dispatch(setCardShowPop(false));
    document.body.style.overflow = "auto";
  }
  function onCardItemDelete(item) {
    const items = card_item.filter((fitem) => {
      if (fitem.id === item.id) {
      } else {
        return fitem;
      }
    });
    dispatch(setShowCard(items));
    window.localStorage.setItem("cardValue", JSON.stringify(items));
  }
  function onOutsiteClick() {
    dispatch(setCardShowPop(false));
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    const subTotal = card_item.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubTotal(subTotal);
    const grandTotal = card_item.reduce(
      (sum, item) =>
        item.discount_price
          ? sum + item.discount_price * item.quantity
          : sum + item.price * item.quantity,
      0
    );
    setGrandTotal(grandTotal);
    const discount = subTotal - grandTotal;
    setDiscount(discount);
  }, [card_item]);

  function onIncrimentClick(clickItem) {
    const newItems = card_item.map((item) => {
      if (clickItem.id == item.id) {
        item = {
          ...item,
          quantity: clickItem.quantity + 1,
        };
      }
      return item;
    });
    dispatch(setShowCard(newItems));
    window.localStorage.setItem("cardValue", JSON.stringify(newItems));
  }
  function onDcrimentClick(clickItem) {
    const newItems = card_item.map((item) => {
      if (clickItem.id == item.id && clickItem.quantity > 1) {
        item = {
          ...item,
          quantity: clickItem.quantity - 1,
        };
      }
      return item;
    });
    dispatch(setShowCard(newItems));
    window.localStorage.setItem("cardValue", JSON.stringify(newItems));
  }

  return (
    <>
      <div onClick={onOutsiteClick} className={style.overlay}></div>
      <div className={style.holder}>
        <div className={style.head_wrapper}>
          <h3>Your Cart</h3>
          <button onClick={onCloseClick}>
            <VscChromeClose />
          </button>
        </div>
        <div className={style.body_wrapper}>
          {card_item.map((item, index) => {
            return (
              <div key={index} className={style.item_wrapper}>
                {console.log(item)}
                <div className={style.image_wrapper}>
                  <Image alt={item.name} fill src={item.image} />
                </div>
                <div className={style.text_wrapper}>
                  <div className={style.title_wrapper}>
                    <p>{item.name}</p>
                    <button onClick={() => onCardItemDelete(item)}>
                      <VscChromeClose />
                    </button>
                  </div>
                  <div className={style.price_wrapper}>
                    <p>
                      <span
                        className={
                          item.discount_price > 0 ? style.price_holder : ""
                        }
                      >
                        <FaBangladeshiTakaSign />
                        {item.price}
                      </span>{" "}
                      {item.discount_price > 0 ? (
                        <span>
                          {" "}
                          <FaBangladeshiTakaSign />
                          {item.discount_price}
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                    <div className={style.increment_button}>
                      <button onClick={() => onDcrimentClick(item)}>
                        <RiIndeterminateCircleLine />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onIncrimentClick(item)}>
                        <AiOutlinePlusCircle />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.footer_wrapper}>
          <div className={style.total_price_wrapper}>
            <div className={style.total_price_holder}>
              <span>Sub Total</span>-
              <small>
                <FaBangladeshiTakaSign />
                {subTotal}
              </small>
            </div>
            <div className={style.total_price_holder}>
              <span>Discount</span>-
              <small>
                <FaBangladeshiTakaSign />
                {discount}
              </small>
            </div>
            <div className={style.total_price_holder}>
              <span>Grand Total</span>-
              <small>
                <FaBangladeshiTakaSign /> {grandTotal}
              </small>
            </div>
          </div>
          <div className={style.button_wrapper}>
            <button>View cart</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

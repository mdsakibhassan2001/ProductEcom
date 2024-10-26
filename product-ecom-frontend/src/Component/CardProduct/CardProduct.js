import React from "react";
import style from "./css/cardProduct.module.css";
import { IoClose } from "react-icons/io5";
export default function CardProduct({ cardItem }) {
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        <div className={style.head_wrapper}>
          <h3>Your Cart</h3>
          <button>
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
}

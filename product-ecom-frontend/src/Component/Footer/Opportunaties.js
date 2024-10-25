import React from "react";
import style from "./css/opportunaties.module.css";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbBorderStyle } from "react-icons/tb";
export default function Opportunaties() {
  const data = [
    {
      title: "FREE DELIVERY",
      body_text: "Free delivery over 2000 BDT shopping.",
      icon: <TbTruckDelivery />,
    },
    {
      title: "Anayase Policies",
      body_text: "Delivery/Return in easy way",
      icon: <TbTruckReturn />,
    },
    {
      title: "Secure Payment",
      body_text: "COD/bKash/Cards",
      icon: <RiSecurePaymentFill />,
    },
    {
      title: "Over Thousands Styles",
      body_text: "Everything you need",
      icon: <TbBorderStyle />,
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.card_wrapper}>
              <div className={style.icon_wrapper}>{item.icon}</div>
              <div className={style.text_wrapper}>
                <h3>{item.title}</h3>
                <span>{item.body_text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

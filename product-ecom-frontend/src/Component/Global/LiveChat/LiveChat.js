
"use client";
import React, { useState } from "react";
import style from "./liveChat.module.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
export default function LiveChat() {
  const [close, setClose] = useState(true);
  function onChatClick() {
    setClose(false);
  }
  function onCloseClick() {
    setClose(true);
  }
  const messengerLink = `https://m.me/102107241999516`;
  const whatsappLink = `https://wa.me/+8801771707097`;
  const contactNumber = `tel:+8801771707097`;
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        <div className={style.link_wrapper}>
          {close ? (
            <div className={style.chat_now} onClick={onChatClick}>
              <p>Chat Now</p>
            </div>
          ) : (
            <div className={style.social_wrapper}>
              <Link
                className={style.facebook}
                href={messengerLink}
                target="_blank"
              >
                <FaFacebookMessenger />
              </Link>

              <Link
                className={style.whatsapp}
                href={whatsappLink}
                data-action="share/whatsapp/share"
                target="_blank"
              >
                <FaWhatsapp />
              </Link>
              <Link className={style.phone} href={contactNumber}>
                <FaPhone />
              </Link>
            </div>
          )}

          <div className={style.click_link}>
            {close ? (
              <button onClick={onChatClick} className={style.chat}>
                <IoChatbubbleEllipsesOutline />
              </button>
            ) : (
              <button onClick={onCloseClick} className={style.close}>
                <IoClose />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
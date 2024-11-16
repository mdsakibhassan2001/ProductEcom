import React from "react";
import style from "./css/footerContent.module.css";
import paymentImg from "../../../public/assets/SSLCOMMERZ-Pay-With-logo-all.png";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
export default function FooterContent() {
  const about = [
    { title: "About Us", url: "#" },
    { title: "Terms & Conditions", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "Return and Refund Policy", url: "#" },
    { title: "Career", url: "#" },
    { title: "Be a Partner", url: "#" },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        <div className={style.content_wrapper}>
          <div className={style.logo_wrapper}>
            <h2>BTOB</h2>
            <div className={style.social_icon_wapper}>
              <BsFacebook />
              <FaYoutube />
              <RiInstagramFill />
              <IoLogoTiktok />
            </div>
          </div>
          <div className={style.about_wrapper}>
            <h3>About</h3>
            <ul>
              {about.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.help_wrapper}>
            <h3>Help</h3>
            <ul>
              <li>
                <Link href="/">Store Locator</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={style.signin_wrapper}>
            <p>Join our newsletter to access all the benefits.</p>
            <p>Sign up to receive the latest news & exclusive offers!</p>
            <div className={style.inpur_wrapper}>
              <input type="email" placeholder="Email Address" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div className={style.payment_img_wrapper}>
          <Image src={paymentImg} />
        </div>
      </div>
    </div>
  );
}

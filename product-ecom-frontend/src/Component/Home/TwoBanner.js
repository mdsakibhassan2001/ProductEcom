import React from "react";
import style from "./css/twoBanner.module.css";
import Image from "next/image";
import oil_banner from "../../../public/assets/shoe_care_products.webp";
import shoe_care from "../../../public/assets/shoe_care_products.webp";
import Link from "next/link";
export default function TwoBanner() {
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        <Link href="/" className={style.image_wrapper}>
          <Image fill src="/assets/battery/PHOTO-2024-11-14-22-58-19.jpg" alt="#" />
        </Link>
        <Link href="/" className={style.image_wrapper}>
          <Image fill src="/assets/electric_tricycle/PHOTO-2024-11-14-22-56-56.jpg" alt="#" />
        </Link>
      </div>
    </div>
  );
}

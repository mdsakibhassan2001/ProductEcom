import React from "react";
import style from "./css/twoBanner.module.css";
import Image from "next/image";
import Link from "next/link";
export default function TwoBanner() {
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        <Link href="/" className={style.image_wrapper}>
          <Image
            fill
            src="/assets/battery/PHOTO-2024-11-14-22-58-19.jpg"
            alt="#"
          />
        </Link>
        <Link href="/" className={style.image_wrapper}>
          <Image
            fill
            src="/assets/watch/PHOTO-2024-11-14-20-54-47.jpg"
            alt="#"
          />
        </Link>
      </div>
    </div>
  );
}

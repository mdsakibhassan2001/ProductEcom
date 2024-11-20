import React from "react";
import style from "./css/twoBanner.module.css";
import Image from "next/image";
import Link from "next/link";
export default function TwoBanner() {
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        <Link href="/" className={style.image_wrapper}>
          <Image fill src="/assets/two_banner/banner1.png" alt="#" />
        </Link>
        <Link href="/" className={style.image_wrapper}>
          <Image fill src="/assets/slider/slider6.png" alt="#" />
        </Link>
      </div>
    </div>
  );
}

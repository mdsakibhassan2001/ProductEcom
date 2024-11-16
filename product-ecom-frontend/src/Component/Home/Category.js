import React from "react";
import style from "./css/category.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Category() {
  const categoryItem = [
    { img:"/assets/battery/PHOTO-2024-11-14-22-58-19.jpg", title: "Battery" },
    { img:"/assets/fashion/PHOTO-2024-11-15-08-53-56.jpg", title: "Fashion" },
    { img:"/assets/electronic/PHOTO-2024-11-14-22-53-11.jpg", title: "Electronic" },
    { img:"/assets/watch/PHOTO-2024-11-14-20-57-58.jpg" , title: "Watch"},
    { img:"/assets/electric_tricycle/PHOTO-2024-11-14-22-56-56.jpg" , title: "Electric Tricycle" },
    { img:"/assets/earbuds/PHOTO-2024-11-14-21-57-42.jpg", title: "Earbuds" },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.holder}>
        {categoryItem.map((item, index) => {
          return (
            <Link href="/" key={index} className={style.card}>
              <div className={style.image_wrapper}>
                <Image fill src={item.img} alt={item.title} />
              </div>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

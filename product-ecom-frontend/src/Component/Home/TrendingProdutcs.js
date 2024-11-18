"use client";
import { useState, useEffect } from "react";
import style from "./css/bestSellingProduct.module.css";
import ProductCard from "../Global/ProductCard";
import AllProductDetails from "../Global/AllProductDetails";
export default function TrendingProdutcs() {
  const [bestSelPro, setBestSelPor] = useState([]);
  useEffect(() => {
    AllProductDetails.map((item) => {
      console.log(item);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <h2>Trending Product</h2>
      <div className={style.holder}>
        {AllProductDetails.map((all_product, index) => {
          return <ProductCard key={index} all_product={all_product.watch} />;
        })}
      </div>
    </div>
  );
}

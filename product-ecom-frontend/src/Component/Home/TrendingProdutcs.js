"use client";
import { useState, useEffect } from "react";
import style from "./css/bestSellingProduct.module.css";
import ProductCard from "../Global/ProductCard";
import AllProductDetails from "../Global/AllProductDetails";
export default function TrendingProdutcs() {
  const allProducts = AllProductDetails.flatMap((categoryObj) =>
    Object.values(categoryObj).flat()
  )
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  const shuffledProducts = shuffleArray(allProducts);
  const trandingProduct = shuffledProducts.slice(0, 20);
  return (
    <div className={style.wrapper}>
      <h2>Trending Produtcs</h2>
      <div className={style.holder}>
        <ProductCard all_product={trandingProduct} />
      </div>
    </div>
  );
}

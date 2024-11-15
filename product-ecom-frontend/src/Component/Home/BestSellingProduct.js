"use client";
import style from "./css/bestSellingProduct.module.css";
import ProductCard from "../Global/ProductCard";
import AllProductDetails from "../Global/AllProductDetails";

export default function BestSellingProduct() {
  return (
    <div className={style.wrapper}>
      <h2>Best Selling Products</h2>
      <div className={style.holder}>
        {AllProductDetails.map((all_product, index) => {
          return <ProductCard key={index} all_product={all_product.fashion} />;
        })}
      </div>
    </div>
  );
}

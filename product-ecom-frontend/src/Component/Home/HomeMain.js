import React from "react";
import MainSlider from "./MainSlider";
import Category from "./Category";
import BestSellingProduct from "./BestSellingProduct";
import TwoBanner from "./TwoBanner";
import TrendingProdutcs from "./TrendingProdutcs";
export default function HomeMain() {
  return (
    <>
      <MainSlider />
      <TwoBanner />
      <BestSellingProduct />
      {/* <Category /> */}
      {/* <TrendingProdutcs /> */}
    </>
  );
}


import style from "./css/bestSellingProduct.module.css";
import ProductCard from "../Global/ProductCard";
import AllProductDetails from "../Global/AllProductDetails";
export default function BestSellingProduct() {
  const allProducts = AllProductDetails.flatMap((categoryObj) =>
    Object.values(categoryObj).flat()
  )
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  const shuffledProducts = shuffleArray(allProducts);
  // const featureProduct = shuffledProducts.slice(0, 30);
  return (
    <div className={style.wrapper}>
      <h2>Best Selling Products</h2>
      <div className={style.holder}>
        <ProductCard all_product={shuffledProducts} />;
      </div>
    </div>
  );
}

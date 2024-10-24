import React from 'react'
import style from './css/bestSellingProduct.module.css'
import ProductCard from '../Global/ProductCard'
import Roxanne_Numbers_3 from '../../../public/assets/Roxanne_Numbers_3_Eau_De_Parfum_For_Man_100_ML.webp'
import Roxanne_Pour from '../../../public/assets/Roxanne_Pour_Homme_Eau_De_Parfum_50_ML.webp'
import Purifying_Tonic from '../../../public/assets/Golden_Rose_Purifying_Tonic.webp'
export default function BestSellingProduct() {
  const productItem =[
    {title:"Roxanne Numbers 3 Eau De Parfum For Men 100 ML ",price:3750,offer_price:3000,image:Roxanne_Numbers_3,offer_percent:10},
    {title:"Roxanne Numbers 3 Eau De ",price:3750,offer_price:3000,image:Roxanne_Pour,offer_percent:10},
    {title:"Roxanne Numbers 3 Eau ",price:3750,offer_price:3000,image:Purifying_Tonic,offer_percent:10},
    {title:"Roxanne Numbers 3 Eau De Parfum For Men ",price:3750,offer_price:3000,image:Roxanne_Pour,offer_percent:10},
    {title:"Roxanne Numbers 3 Eau De Parfum For",price:3750,offer_price:3000,image:Roxanne_Pour,offer_percent:10},
    {title:"Roxanne Numbers 3 Eau De Parfum For Men 100 ML",price:3750,offer_price:3000,image:Roxanne_Pour,offer_percent:10},
    {title:"Roxanne Numbers 3 Eau De Parfum ",price:3750,offer_price:3000,image:Roxanne_Pour,offer_percent:10},
    {title:"Roxanne Numbers 3",price:3750,offer_price:3000,image:Roxanne_Pour,offer_percent:10},
  ]
  return (
    <div className={style.wrapper}>
      <h2>Best Selling Product</h2>
        <div className={style.holder}>
           <ProductCard productItem={productItem}/>
        </div>
    </div>
  )
}

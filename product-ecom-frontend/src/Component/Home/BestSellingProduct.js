import React from 'react'
import style from './css/bestSellingProduct.module.css'
import ProductCard from '../Global/ProductCard'
export default function BestSellingProduct() {
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
           <ProductCard/>
        </div>
    </div>
  )
}

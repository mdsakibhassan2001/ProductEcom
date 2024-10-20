import React from 'react'
import style from './css/productCard.module.css'
import Link from 'next/link'
export default function ProductCard() {
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
        <div className={style.card}>
                <div className={style.card_body}>
                    {/* <Image src={}/> */}
                </div>
                <div className={style.card_footer}>
                    <Link href="/">Roxanne Numbers 3 Eau De Parfum For Men 100 ML</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

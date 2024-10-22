import React from 'react'
import style from './css/twoBanner.module.css'
import Image from 'next/image'
import oil_banner from '../../../public/assets/olive-oil-banner.webp'
import shoe_care from '../../../public/assets/shoe_care_products.webp'
import Link from 'next/link'
export default function TwoBanner() {
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
            <Link href="/" className={style.image_wrapper}>
                <Image src={oil_banner} alt='#'/>
            </Link>
            <Link href="/" className={style.image_wrapper}>
               <Image src={shoe_care} alt='#'/>
           </Link>
        </div>
    </div>
  )
}

import React from 'react'
import style from './css/category.module.css'
import face from '../../../public/assets/face_makeup.webp'
import hair_care from '../../../public/assets/hair_care_oil.webp'
import perfume from '../../../public/assets/perfume_bangladesh.webp'
import nail from '../../../public/assets/nail_makeup.webp'
import Eye_Makeup from '../../../public/assets/Eye_Makeup.webp'
import shoe_care from '../../../public/assets/shoe_care_products.webp'
import Image from 'next/image'
import Link from 'next/link'
export default function Category() {
    const categoryItem=[
        {img:face,title:"Face"},
        {img:hair_care,title:"Hair Care Oil"},
        {img:perfume,title:"Perfume"},
        {img:nail,title:"Nail Care"},
        {img:Eye_Makeup,title:"Eye Makeup"},
        {img:shoe_care,title:"Shoe Care"},
    ]
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
                {
                    categoryItem.map((item,index)=>{
                       return <Link href="/" key={index}  className={style.card}>
                        <Image src={item.img} alt="image"/>
                        <span>{item.title}</span>
                    </Link>
                    })
                }
        </div>
    </div>
  )
}

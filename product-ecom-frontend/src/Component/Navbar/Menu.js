import React from 'react'
import style from './css/menu.module.css'
import Link from 'next/link'
export default function Menu() {
  const category=[
    {name:"Electronics",link:""},
    {name:"Fashion",link:""},
    {name:"Gifts",link:""},
    {name:"House Products",link:""},
    {name:"Industrial Machinery",link:""},
    {name:"ewellery & Watch",link:""},
    {name:"Printing",link:""},
  ]
  return (
    <>
     <div  className={style.overlay}></div>
    <div className={style.wrapper}>

        <div className={style.holder}>
            <ul>
              {
                category?.map((item,index)=>{
                  return <li key={index}><Link  href={item.link}>{item.name}</Link></li>
                })
              }
            </ul>
        </div>
    </div>
    
    </>
    
  )
}

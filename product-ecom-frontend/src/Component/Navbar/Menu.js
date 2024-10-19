import React from 'react'
import style from './css/menu.module.css'
import Link from 'next/link'
export default function Menu() {
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Face</Link></li>
              <li><Link href="/">Eyes</Link></li>
              <li><Link href="/">Lips</Link></li>
              <li><Link href="/">Makeup</Link></li>
              <li><Link href="/">Perfume</Link></li>
              <li><Link href="/">Shoe Care</Link></li>
              <li><Link href="/">Olive Oil</Link></li>
              <li><Link href="/">Mom & Baby Care</Link></li>
            </ul>
        </div>
    </div>
  )
}

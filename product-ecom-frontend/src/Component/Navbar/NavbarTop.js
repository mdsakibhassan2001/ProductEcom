import React from 'react'
import style from './css/navbarTop.module'
export default function NavbarTop() {
  return (
    <div className={style.wrapper}>
        <div className={style.holder}>
            <div className={style.logo_wrapper}>
                <h2>btb24</h2>
            </div>
            <div className={style.search_wrapper}>
                
            </div>
            <div className={style.login_wrapper}></div>
        </div>
    </div>
  )
}

import React from 'react'
import s from './style.module.css'


const Logo = ({img, title, subtitle}) => {
  return (
    <div>
        <div className={s.container}>
            <img className={s.img} src={img} alt="Logo" />
            <div className={s.title}>{title}</div>
        </div>
        <div className={s.subtitle}>{subtitle}</div>
    </div>
  )
}

export default Logo
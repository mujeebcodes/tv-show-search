import React from 'react'
import s from './style.module.css'
import { small_image_base_url } from '../../config'

const TVShowListItem = ({tvShow, onClick}) => {
    const onClick_ = () => {
        onClick(tvShow);
    }
  return (
    <div onClick={onClick_} className={s.container}>
        <img 
        src={small_image_base_url + tvShow.backdrop_path} 
        alt={tvShow.name}
        className={s.img} 
        />
        <div className={s.title}>
            {tvShow.name}
        </div>
    </div>
  )
}

export default TVShowListItem
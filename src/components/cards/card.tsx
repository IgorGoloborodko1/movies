import React from 'react'

import { MoviesActions } from '../moviesActions/moviesActions'

import noImagePicture from '../../../assets/noImagePicture.png'

import styles from './card.module.css'

interface MovieCardProps {
  id: string
  imgSrc: string
  name: string
  year: string
  description: string
}

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  imgSrc,
  name,
  year,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src={imgSrc}
          alt={name}
          onError={({ target }) => {
            ;(target as HTMLImageElement).onerror = null
            ;(target as HTMLImageElement).src = noImagePicture
          }}
        ></img>
      </figure>
      <div className={styles.descNameWrapper}>
        <div className={styles.descWrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <p>{year.slice(0, 4)}</p>
      </div>
      <MoviesActions id={id} />
    </div>
  )
}

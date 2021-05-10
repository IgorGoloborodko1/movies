import React from 'react'

import { MoviesActions } from '../moviesActions/moviesActions'

import styles from './card.module.css'

interface MovieCardProps {
  imgSrc: string
  name: string
  year: string
  description: string
  handleMovieClick(): void
}

export const MovieCard: React.FC<MovieCardProps> = ({
  imgSrc,
  name,
  year,
  description,
  handleMovieClick,
}) => {
  return (
    <div onClick={() => handleMovieClick(id)} className={styles.wrapper}>
      <figure className={styles.figure}>
        <img className={styles.image} src={imgSrc} alt={name}></img>
      </figure>
      <div className={styles.descNameWrapper}>
        <div className={styles.descWrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <p>{year.slice(0, 4)}</p>
      </div>
      <MoviesActions />
    </div>
  )
}

import React from 'react'

import styles from './card.module.css'

interface MovieCardProps {
  imgSrc: string
  name: string
  year: number
  description: string
}

export const MovieCard: React.FC<MovieCardProps> = ({
  imgSrc,
  name,
  year,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.figure}>
        <img className={styles.image} src={imgSrc}></img>
      </figure>
      <div className={styles.descNameWrapper}>
        <div className={styles.descWrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <p>{year}</p>
      </div>
    </div>
  )
}

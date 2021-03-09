/* eslint-disable react/prop-types */
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
    <div className={styles.container}>
      <figure className={styles.figure}>
        <img className={styles.image} src={imgSrc}></img>
      </figure>
      <div>
        <div>
          <span>{name}</span>
          <span>{description}</span>
        </div>
        <span>{year}</span>
      </div>
    </div>
  )
}

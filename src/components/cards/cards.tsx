import React from 'react'

import { MovieCard } from '../cards/card'
import { movies } from '../cards/moviesData'

import styles from './cards.module.css'

export const MovieCards: React.FC = () => (
  <ul className={styles.list}>
    {movies.length < 1 ? (
      <h2>Sorry, no movies for your request...</h2>
    ) : (
      movies.map(({ id, imgSrc, name, year, description }) => (
        <li key={id} className={styles.listItem}>
          <MovieCard
            imgSrc={imgSrc}
            name={name}
            year={year}
            description={description}
          />
        </li>
      ))
    )}
  </ul>
)

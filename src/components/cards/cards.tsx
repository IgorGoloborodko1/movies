import React from 'react'

import { MovieCard } from './card'
import { movies } from './moviesData'
import { SortMovies } from '../sortMovies/sortMovies'

import styles from './cards.module.css'

export const MovieCards: React.FC = () => {
  return (
    <div>
      <section className={styles.wrapper}>
        <SortMovies />
        <ul className={styles.list}>
          {movies.map(({ id, imgSrc, name, year, description }) => (
            <li key={id} className={styles.listItem}>
              <MovieCard
                imgSrc={imgSrc}
                name={name}
                year={year}
                description={description}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

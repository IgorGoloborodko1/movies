import React from 'react'

import { MovieCards } from '../cards/cards'
import { SortMovies } from '../sortMovies/sortMovies'

import styles from './moviesSection.module.css'

export const MoviesSection: React.FC = () => (
  <div>
    <section className={styles.wrapper}>
      <SortMovies />
      <MovieCards />
    </section>
  </div>
)

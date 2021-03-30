import React from 'react'

import { MovieCards } from '../cards/cards'
import { SortMovies } from '../sortMovies/sortMovies'
import { sortByYear } from '../../utils/utils'

import styles from './moviesSection.module.css'

import { movies } from './moviesData'

export const MoviesSection: React.FC = () => {
  const [moviesData, setMoviesData] = React.useState(movies)

  const handleSort = () => {
    const moviesDataCopy = moviesData.slice()
    moviesDataCopy.sort(sortByYear)
    setMoviesData(moviesDataCopy)
  }

  return (
    <div>
      <section className={styles.wrapper}>
        <SortMovies handleSort={handleSort} />
        <MovieCards movies={moviesData} />
      </section>
    </div>
  )
}

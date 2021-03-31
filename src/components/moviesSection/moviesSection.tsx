import React from 'react'

import { MovieCards } from '../cards/cards'
import { SortMovies } from '../sortMovies/sortMovies'
import { sortByYear } from '../../utils/utils'

import { movies } from './moviesData'

import styles from './moviesSection.module.css'

export const MoviesSection: React.FC = () => {
  const [moviesData, setMoviesData] = React.useState(movies)

  const handleSort = () => {
    const moviesDataCopy = [...moviesData]
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

import React from 'react'

import { Categories } from './categories'
import { SortBy } from './sortBy'

import styles from './sortMovies.module.css'

interface SortMoviesProps {
  handleSort(): void
}

export const SortMovies: React.FC<SortMoviesProps> = ({ handleSort }) => {
  return (
    <div className={styles.wrapper}>
      <Categories />
      <SortBy handleSort={handleSort} />
    </div>
  )
}

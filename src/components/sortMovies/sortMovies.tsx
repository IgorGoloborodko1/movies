import React from 'react'

import { Categories } from './categories'
import { SortBy } from './sortBy'

import styles from './sortMovies.module.css'

export const SortMovies: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Categories />
      <SortBy />
    </div>
  )
}

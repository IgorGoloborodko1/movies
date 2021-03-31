import React from 'react'

import styles from './sortBy.module.css'

interface SortByProps {
  handleSort(): void
}

export const SortBy: React.FC<SortByProps> = ({ handleSort }) => (
  <div className={styles.wrapper} onClick={handleSort}>
    <p className={styles.sortBy}>sort by</p>
    <p>release date</p>
  </div>
)

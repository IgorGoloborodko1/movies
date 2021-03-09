import React from 'react'

import styles from './search.module.css'

export const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Find your movie</h3>
      <div className={styles.inputsWrapper}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="What do you want to watch?"
        />
        <input type="button" className={styles.searchButton}>
          SEARCH
        </input>
      </div>
    </div>
  )
}

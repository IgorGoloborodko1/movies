import React from 'react'

import styles from './search.module.css'

export const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputsWrapper}>
        <h3 className={styles.title}>Find your movie</h3>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="What do you want to watch?"
        />
      </div>
      <button type="button" className={styles.searchButton}>
        search
      </button>
    </div>
  )
}

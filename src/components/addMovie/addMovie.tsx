import React from 'react'

import styles from './addMovie.module.css'

export const AddMovie: React.FC = () => (
  <div className={styles.wrapper}>
    <button className={styles.button} type="button">
      + add movie
    </button>
  </div>
)

import React from 'react'

import styles from './deleteMovie.module.css'

export const DeleteMovie: React.FC = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>delete movie</h1>
      <p className={styles.text}>Are you sure you want to delete this movie?</p>
      <div className={styles.btnsContainer}>
        <button className={styles.submitBtn} type="submit">
          confirm
        </button>
      </div>
    </>
  )
}

import React from 'react'

import styles from './addMovies.module.css'

export const AddMovie: React.FC = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>add movie</h1>
      <form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <span className={styles.fieldTitle}>title</span>
          <input
            className={styles.field}
            type="text"
            name="title"
            placeholder="Moana"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>release date</span>
          <input
            className={styles.field}
            type="text"
            name="releaseDate"
            placeholder="Select date"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>movie url</span>
          <input
            className={styles.field}
            type="text"
            name="movieUrl"
            placeholder="Movie URL here"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>genre</span>
          <input
            className={styles.field}
            type="text"
            name="genre"
            placeholder="Select Genre"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>overview</span>
          <input
            className={styles.field}
            type="text"
            name="overview"
            placeholder="Overview here"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>runtime</span>
          <input
            className={styles.field}
            type="text"
            name="runtime"
            placeholder="Runtime here"
          />
        </label>
      </form>

      <div className={styles.btnsContainer}>
        <button className={styles.resetBtn} type="button">
          reset
        </button>
        <button className={styles.submitBtn} type="submit">
          submit
        </button>
      </div>
    </>
  )
}

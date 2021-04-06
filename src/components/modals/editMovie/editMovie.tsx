import React from 'react'

import styles from './editMovie.module.css'

export const EditMovie: React.FC = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>edit movie</h1>
      <form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <span className={styles.fieldTitle}>movie id</span>
          <input
            className={styles.field}
            type="text"
            name="title"
            placeholder="11111111"
          />
        </label>

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
          <i className="fas fa-calendar-alt"></i>
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
          <select className={styles.field} name="genre">
            <option value="drama">Drama</option>
            <option value="comedy" selected>
              Comedy
            </option>
          </select>
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
        <button type="submit">submit</button>
      </div>
    </>
  )
}

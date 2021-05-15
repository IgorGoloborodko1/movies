import React from 'react'
import { useDispatch } from 'react-redux'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import { postMovieRequested } from '../../../redux/actions'

import styles from './addMovieModal.module.css'

export const AddMovieModal: React.FC = () => {
  const dispatch = useDispatch()

  const initialValues = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [''],
    overview: '',
    runtime: 0,
  }

  const handleSubmit = (movie: any) => {
    dispatch(postMovieRequested(movie))
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form} autoComplete="off">
        <h1 className={styles.pageTitle}>add movie</h1>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>title</span>
          <Field
            className={styles.field}
            type="text"
            name="title"
            placeholder="Moana"
          />
        </label>
        <ErrorMessage name="title" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>release date</span>
          <Field
            className={styles.field}
            type="date"
            name="release_date"
            placeholder="Select date"
          />
        </label>
        <ErrorMessage name="release_date" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>genres</span>
          <Field
            component="select"
            multiple
            className={styles.field}
            name="genres"
            placeholder="Select Genre"
          >
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
          </Field>
        </label>
        <ErrorMessage name="genres" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>overview</span>
          <Field
            className={styles.field}
            type="text"
            name="overview"
            placeholder="Overview here"
          />
        </label>
        <ErrorMessage name="overview" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>poster path</span>
          <Field
            className={styles.field}
            type="text"
            name="poster_path"
            placeholder="Poster"
          />
        </label>
        <ErrorMessage name="poster_path" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>runtime</span>
          <Field
            className={styles.field}
            type="text"
            name="runtime"
            placeholder="Runtime here"
          />
        </label>
        <ErrorMessage name="runtime" />

        <div className={styles.btnsContainer}>
          <button className={styles.resetBtn} type="button">
            reset
          </button>
          <button type="submit">submit</button>
        </div>
      </Form>
    </Formik>
  )
}

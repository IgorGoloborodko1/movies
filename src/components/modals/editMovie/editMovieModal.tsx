import React from 'react'
import { useDispatch } from 'react-redux'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import { updateMovieRequested } from '../../../redux/actions'

import styles from './editMovieModal.module.css'

interface EditMovieModalProps {
  handleUpdate(id: string): void
}

export const EditMovieModal: React.FC = ({ handleUpdate }) => {
  const dispatch = useDispatch()

  const initialValues = {
    id: 0,
    title: '',
    release_date: '',
    poster_path: '',
    genres: [''],
    overview: '',
    runtime: 0,
  }

  const handleSubmit = (movie: any) => {
    dispatch(updateMovieRequested(movie))
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form} autoComplete="off">
        <h1 className={styles.pageTitle}>edit movie</h1>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>movie id</span>
          <Field
            className={styles.field}
            type="text"
            name="id"
            placeholder="11111111"
          />
        </label>
        <ErrorMessage name="id" />

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
          <i className="fas fa-calendar-alt"></i>
          <Field
            className={styles.field}
            type="text"
            name="release_date"
            placeholder="Select date"
          />
        </label>
        <ErrorMessage name="release_date" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>genres</span>
          <Field
            className={styles.field}
            name="genres"
            component="select"
            multiple
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

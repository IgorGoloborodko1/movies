import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import {
  updateMovieRequested,
  singleMovieFetchRequested,
} from '../../../redux/actions'

import { getMovie } from '../../../redux/selectors'
import { editMovieValidationSchema } from './validationSchema'

import styles from './editMovieModal.module.css'

interface EditMovieModalProps {
  id: string
  handleUpdate(id: string): void
}

export const EditMovieModal: React.FC<EditMovieModalProps> = ({
  id,
  handleUpdate,
}) => {
  const dispatch = useDispatch()
  const currentMovie = useSelector(getMovie, shallowEqual)

  React.useEffect(() => {
    dispatch(singleMovieFetchRequested(id))
  }, [])

  const {
    id: movieId,
    title,
    release_date,
    overview,
    poster_path,
    runtime,
  } = currentMovie

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
    console.log(movie)
    dispatch(updateMovieRequested(movie))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={editMovieValidationSchema}
    >
      <Form className={styles.form} autoComplete="off">
        <h1 className={styles.pageTitle}>edit movie</h1>

        <label className={styles.label}>
          <span className={styles.fieldTitle}>movie id</span>
          <Field className={styles.field} type="text" name="id" />
        </label>
        <ErrorMessage name="id" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>title</span>
          <Field className={styles.field} type="text" name="title" />
        </label>
        <ErrorMessage name="title" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>release date</span>
          <i className="fas fa-calendar-alt"></i>
          <Field className={styles.field} type="date" name="release_date" />
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
          <Field className={styles.field} type="text" name="overview" />
        </label>
        <ErrorMessage name="overview" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>poster path</span>
          <Field className={styles.field} type="text" name="poster_path" />
        </label>
        <ErrorMessage name="poster_path" />

        <label className={styles.label}>
          <span className={styles.fieldTitle}>runtime</span>
          <Field className={styles.field} type="text" name="runtime" />
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

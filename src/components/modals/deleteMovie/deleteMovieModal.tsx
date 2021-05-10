import React from 'react'

import styles from './deleteMovieModal.module.css'

interface DeleteMovieModalProps {
  handleDelete(): void
}

export const DeleteMovieModal: React.FC<DeleteMovieModalProps> = ({
  handleDelete,
}) => {
  return (
    <>
      <h1 className={styles.pageTitle}>delete movie</h1>
      <p className={styles.text}>Are you sure you want to delete this movie?</p>
      <div className={styles.btnsContainer}>
        <button
          className={styles.submitBtn}
          onClick={handleDelete}
          type="submit"
        >
          confirm
        </button>
      </div>
    </>
  )
}

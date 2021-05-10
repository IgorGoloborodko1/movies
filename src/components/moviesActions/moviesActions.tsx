import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovieId } from '../../redux/selectors'
import { deleteMovieRequested, updateMovieRequested } from '../../redux/actions'
import { useModal } from '../../hooks/hooks'
import { Modal } from '../modals/modal/modal'
import { DeleteMovieModal } from '../modals/deleteMovie/deleteMovieModal'
import { EditMovieModal } from '../modals/editMovie/editMovieModal'

import styles from './moviesActions.css'

export const MoviesActions: React.FC = () => {
  const dispatch = useDispatch()
  const id = useSelector(getMovieId)

  const { isDisplayed, toggleModal } = useModal()

  const handleDelete = () => {
    dispatch(deleteMovieRequested)
  }

  const handleUpdate = () => {
    dispatch(updateMovieRequested(id))
  }

  return (
    <div>
      <div>
        <button onClick={toggleModal} className={styles.MovieOptionsListBtn}>
          Delete
        </button>
        <Modal isDisplayed={isDisplayed} handleModalClose={toggleModal}>
          <DeleteMovieModal handleDelete={handleDelete} />
        </Modal>
      </div>

      <div>
        <button onClick={toggleModal} className={styles.MovieOptionsListBtn}>
          Edit
        </button>
        <Modal isDisplayed={isDisplayed} handleModalClose={toggleModal}>
          <EditMovieModal handleUpdate={handleUpdate} />
        </Modal>
      </div>
    </div>
  )
}

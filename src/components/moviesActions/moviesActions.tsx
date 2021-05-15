import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteMovieRequested } from '../../redux/actions'
import { useModal } from '../../hooks/hooks'
import { Modal } from '../modals/modal/modal'
import { DeleteMovieModal } from '../modals/deleteMovie/deleteMovieModal'
import { EditMovieModal } from '../modals/editMovie/editMovieModal'

import styles from './moviesActions.module.css'

interface MoviesActionsProps {
  id: string
}

export const MoviesActions: React.FC<MoviesActionsProps> = ({ id }) => {
  const dispatch = useDispatch()

  const { isDisplayed, toggleModal } = useModal()

  const handleDelete = () => {
    dispatch(deleteMovieRequested(id))
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={toggleModal} className={styles.button}>
          Delete
        </button>
        <Modal isDisplayed={isDisplayed} handleModalClose={toggleModal}>
          <DeleteMovieModal handleDelete={handleDelete} />
        </Modal>
      </div>

      <div>
        <button onClick={toggleModal} className={styles.button}>
          Edit
        </button>
        <Modal isDisplayed={isDisplayed} handleModalClose={toggleModal}>
          <EditMovieModal id={id} />
        </Modal>
      </div>
    </div>
  )
}

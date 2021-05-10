import React from 'react'

import { Logo } from '../logo/logo'
import { AddMovieButton } from '../addMovie/addMovie'
import { Search } from '../search/search'

import styles from './pageHeading.module.css'
import { AddMovieModal } from '../modals/addMovie/addMovieModal'
import { useModal } from '../../hooks/hooks'
import { Modal } from '../modals/modal/modal'

export const PageHeading: React.FC = () => {
  const { isDisplayed, toggleModal } = useModal()

  return (
    <header className={styles.heading}>
      <div className={styles.headingTopWrapper}>
        <Logo />
        <div>
          <button onClick={toggleModal} className={styles.MovieOptionsListBtn}>
            + add movie
          </button>
          <Modal isDisplayed={isDisplayed} handleModalClose={toggleModal}>
            <AddMovieModal />
          </Modal>
        </div>
      </div>
      <Search />
    </header>
  )
}

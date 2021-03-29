import React, { SyntheticEvent } from 'react'

import { ErrorBoundary } from '../errorBoundary/errorBoundary'
import { Home } from '../../pages/homePage'
import { Modal } from '../modals/modal/modal'

import styles from './App.module.css'
import { EditMovie } from '../modals/editMovie/editMovie'

export const App: React.FC = () => {
  const [isModalDisplayed, setIsModalDisplayed] = React.useState(true)

  const handleModalClose = () => {
    setIsModalDisplayed(false)
  }

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Home />
        </div>
      </div>
      <Modal isDisplayed={isModalDisplayed} handleClose={handleModalClose}>
        <EditMovie />
      </Modal>
    </ErrorBoundary>
  )
}

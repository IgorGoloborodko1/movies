import React from 'react'

import { ErrorBoundary } from '../errorBoundary/errorBoundary'
import { Home } from '../../pages/homePage'

import styles from './App.module.css'

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Home />
        </div>
      </div>
    </ErrorBoundary>
  )
}

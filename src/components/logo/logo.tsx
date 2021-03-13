import React from 'react'

import styles from './logo.module.css'

export const Logo: React.FC = () => {
  return (
    <div>
      <a href="#">
        <h1 className={styles.title}>
          <b>movies</b>roulette
        </h1>
      </a>
    </div>
  )
}

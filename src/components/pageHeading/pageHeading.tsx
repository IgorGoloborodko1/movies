import React from 'react'

import { Logo } from '../logo/logo'
import { Search } from '../search/search'
import { AddMovie } from '../addMovie/addMovie'

import styles from './pageHeading.module.css'

export const PageHeading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headingWrapper}>
          <Logo />
          <AddMovie />
        </div>
        <div className={styles.searchWrapper}>
          <Search />
        </div>
      </header>
    </div>
  )
}

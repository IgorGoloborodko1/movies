import React from 'react'

import { Logo } from '../logo/logo'
import { AddMovie } from '../addMovie/addMovie'
import { Search } from '../search/search'

import styles from './pageHeading.module.css'

export const PageHeading: React.FC = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.headingTopWrapper}>
        <Logo />
        <AddMovie />
      </div>
      <Search />
    </header>
  )
}

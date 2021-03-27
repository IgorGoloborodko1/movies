import React from 'react'

import { Logo } from '../logo/logo'

import styles from './footer.module.css'

export const Footer: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
      </div>
    </div>
  )
}

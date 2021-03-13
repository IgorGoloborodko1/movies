import React from 'react'

import styles from './categories.module.css'

export const Categories: React.FC = () => {
  return (
    <ul className={styles.wrapper}>
      <li>all</li>
      <li>documentary</li>
      <li>comedy</li>
      <li>horror</li>
      <li>crime</li>
    </ul>
  )
}

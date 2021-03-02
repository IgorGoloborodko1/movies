import React from 'react'

import styles from './draft.module.css'

export function sum(a: number, b: number): number {
  return a + b
}

export const HelloWebpack: React.FC = () => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Hello Something</h1>
      <div className={styles.logo}></div>
    </div>
  )
}

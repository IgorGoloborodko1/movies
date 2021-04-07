import React from 'react'
import { createPortal } from 'react-dom'

import styles from './modal.module.css'

interface ModalProps {
  isDisplayed: boolean
  children: React.ReactNode
  handleModalClose(): void
}

export const Modal: React.FC<ModalProps> = ({
  isDisplayed,
  children,
  handleModalClose,
}) => {
  const body = document.querySelector('body')
  const portal = document.createElement('div')
  const containerRef = React.useRef(null)

  const handleDocumentClick = (event: MouseEvent) => {
    const isTargetInsideContainer = containerRef.current.contains(event.target)

    if (isDisplayed && !isTargetInsideContainer) {
      handleModalClose()
    }
  }

  React.useEffect(() => {
    if (isDisplayed) {
      body.appendChild(portal)
    }

    return () => {
      if (body.contains(portal)) {
        body.removeChild(portal)
      }
    }
  }, [portal, body, isDisplayed])

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    isDisplayed &&
    createPortal(
      <div className={styles.backdrop}>
        <div className={styles.window} ref={containerRef}>
          <button className={styles.closeBtn} onClick={handleModalClose}>
            X
          </button>
          {children}
        </div>
      </div>,
      portal,
    )
  )
}

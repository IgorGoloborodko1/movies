import React, { SyntheticEvent } from 'react'
import { createPortal } from 'react-dom'
import { container } from '../../footer/footer.module.css'

import styles from './modal.module.css'

interface ModalProps {
  isDisplayed: boolean
  children: React.ReactNode
  handleClose(): void
}

export const Modal: React.FC<ModalProps> = ({
  isDisplayed,
  children,
  handleClose,
}) => {
  const body = document.querySelector('body')
  const portal = document.createElement('div')
  const containerRef = React.useRef(null)

  const handleWindowClick = (event: any) => {
    const isTargetInsideContainer = containerRef.current.contains(event.target)

    if (isDisplayed && !isTargetInsideContainer) {
      handleClose()
    }
  }

  React.useEffect(() => {
    if (isDisplayed) {
      body.appendChild(portal)
      body.style.overflow = 'hidden'
    }

    return () => {
      if (body.contains(portal)) {
        body.removeChild(portal)
        body.style.overflow = 'initial'
      }
    }
  }, [portal, body, isDisplayed])

  React.useEffect(() => {
    document.addEventListener('click', handleWindowClick)

    return () => {
      document.removeEventListener('click', handleWindowClick)
    }
  }, [])

  return (
    isDisplayed &&
    createPortal(
      <div className={styles.backdrop}>
        <div className={styles.window} ref={containerRef}>
          <button className={styles.closeBtn} onClick={handleClose}>
            X
          </button>
          {children}
        </div>
      </div>,
      portal,
    )
  )
}

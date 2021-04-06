import React from 'react'

export const useModal = () => {
  const [isDisplayed, setIsDisplayed] = React.useState(false)

  const toggleModal = () => {
    setIsDisplayed(!isDisplayed)
  }

  return {
    isDisplayed,
    toggleModal,
  }
}

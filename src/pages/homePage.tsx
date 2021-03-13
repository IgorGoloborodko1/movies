import React from 'react'

import { PageHeading } from '../components/pageHeading/pageHeading'
import { MovieCards } from '../components/cards/cards'
import { Footer } from '../components/footer/footer'

export const Home: React.FC = () => {
  return (
    <>
      <PageHeading />
      <MovieCards />
      <Footer />
    </>
  )
}

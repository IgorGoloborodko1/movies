import React from 'react'

import { PageHeading } from '../components/pageHeading/pageHeading'
import { MoviesSection } from '../components/moviesSection/moviesSection'
import { Footer } from '../components/footer/footer'

export const Home: React.FC = () => {
  return (
    <>
      <PageHeading />
      <MoviesSection />
      <Footer />
    </>
  )
}

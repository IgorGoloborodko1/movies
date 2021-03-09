import React from 'react'
import { ErrorBoundary } from '../components/errorBoundary/errorBoundary'

import { Search } from '../components/search/search'
import { MovieCards } from '../components/cards/cards'

export const Home: React.FC = () => {
  return <MovieCards />
}

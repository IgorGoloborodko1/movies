import React from 'react'

import { MovieCard } from './card'
import { movies } from './moviesData'

export const MovieCards = () => {
  return (
    <ul>
      {movies.map(({ id, imgSrc, name, year, description }) => (
        <li key={id}>
          <MovieCard
            imgSrc={imgSrc}
            name={name}
            year={year}
            description={description}
          />
        </li>
      ))}
    </ul>
  )
}

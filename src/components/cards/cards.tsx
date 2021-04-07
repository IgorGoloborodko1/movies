import React from 'react'

import { MovieCard } from '../cards/card'
import { Movie } from '../../utils/interfaces'

import styles from './cards.module.css'

interface MovieCardsProps {
  movies: Movie[]
  handleMovieClick(e: React.SyntheticEvent<HTMLElement>): void
}

export const MovieCards: React.FC<MovieCardsProps> = ({
  movies,
  handleMovieClick,
}) => (
  <ul className={styles.list}>
    {movies.length < 1 ? (
      <h2>Sorry, no movies for your request...</h2>
    ) : (
      movies.map(({ id, imgSrc, name, year, description }) => (
        <li
          key={id}
          data-id={id}
          className={styles.listItem}
          onClick={handleMovieClick}
        >
          <MovieCard
            imgSrc={imgSrc}
            name={name}
            year={year}
            description={description}
          />
        </li>
      ))
    )}
  </ul>
)

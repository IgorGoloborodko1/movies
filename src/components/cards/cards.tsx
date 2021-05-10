import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { isEmpty } from 'lodash/fp'

import { moviesFetchRequested } from '../../redux/actions/index'
import { getMovies } from '../../redux/selectors/'
import { MovieCard } from '../cards/card'
import { Movie } from '../../utils/interfaces'

import styles from './cards.module.css'

export const MovieCards: React.FC = () => {
  const dispatch = useDispatch()
  const movies = useSelector(getMovies, shallowEqual)

  React.useEffect(() => {
    dispatch(moviesFetchRequested())
  }, [])

  const handleMovieClick = (e: React.SyntheticEvent<HTMLElement>) => {
    const selectedMovieId = e.currentTarget.dataset.id
    const movie = movies.find(({ id }) => String(id) === selectedMovieId)

    dispatch(setSelectedMovieRequested(movie))
  }

  return (
    <ul className={styles.list}>
      {isEmpty(movies) ? (
        <h2>Sorry, no movies for your request...</h2>
      ) : (
        movies.map(({ id, poster_path, title, release_date, tagline }) => (
          <li key={id} data-id={id} className={styles.listItem}>
            <MovieCard
              imgSrc={poster_path}
              name={title}
              year={release_date}
              description={tagline}
              handleMovieClick={hand}
            />
          </li>
        ))
      )}
    </ul>
  )
}

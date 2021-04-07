import React from 'react'

import { MovieCards } from '../cards/cards'
import { SortMovies } from '../sortMovies/sortMovies'
import { MovieDetails } from '../modals/movieDetails/movieDetails'
import { Modal } from '../modals/modal/modal'
import { useModal } from '../../hooks/hooks'
import { sortByYear } from '../../utils/utils'

import { movies } from './moviesData'

import styles from './moviesSection.module.css'

export const MoviesSection: React.FC = () => {
  const [moviesData, setMoviesData] = React.useState(movies)
  const [selectedMovieName, setSelectedMovieName] = React.useState('')
  const [selectedMovieYear, setSelectedMovieYear] = React.useState(0)

  const { isDisplayed, toggleModal } = useModal()

  const handleSort = React.useCallback(() => {
    const moviesDataCopy = [...moviesData]
    moviesDataCopy.sort(sortByYear)
    setMoviesData(moviesDataCopy)
  }, [moviesData])

  const handleMovieClick = (e: React.SyntheticEvent<HTMLElement>) => {
    const selectedMovieId = e.currentTarget.dataset.id
    const { name, year } = moviesData.find(
      ({ id }) => String(id) === selectedMovieId,
    )

    setSelectedMovieName(name)
    setSelectedMovieYear(year)
    toggleModal()
  }

  return (
    <div>
      <section className={styles.wrapper}>
        <SortMovies handleSort={handleSort} />
        <MovieCards movies={moviesData} handleMovieClick={handleMovieClick} />
      </section>
      <Modal isDisplayed={isDisplayed} handleModalClose={toggleModal}>
        <MovieDetails name={selectedMovieName} year={selectedMovieYear} />
      </Modal>
    </div>
  )
}

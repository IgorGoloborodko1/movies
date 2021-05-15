import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { MoviesState } from '../../redux/reducers/interfaces'
import { MovieCards } from '../cards/cards'
import { SortMovies } from '../sortMovies/sortMovies'
import { MovieDetails } from '../modals/movieDetails/movieDetails'
import { Modal } from '../modals/modal/modal'
import { useModal } from '../../hooks/hooks'
// import { sortByYear } from '../../utils/utils'

import styles from './moviesSection.module.css'

export const MoviesSection: React.FC = () => {
  return (
    <div>
      <section className={styles.wrapper}>
        <SortMovies
          handleSort={() => {
            console.log('hi')
          }}
        />
        <MovieCards />
      </section>
    </div>
  )
}

import { MoviesState } from '../reducers/interfaces'
import { Movie } from '../../utils/interfaces'

export const getMovies = (state: MoviesState): Movie[] => state.movies
export const getMovie = (state: MoviesState): Movie => state.currentMovie

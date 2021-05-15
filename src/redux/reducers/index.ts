import { MoviesState } from './interfaces'
import { Movie } from '../../utils/interfaces'

const initialState: MoviesState = {
  movies: [],
  moviesFetchFailedErrorMessage: '',
  currentMovie: {},
  singleMovieFetchFailedErrorMessage: '',
}

export const reducer = (
  state: MoviesState = initialState,
  action: any,
): MoviesState => {
  switch (action.type) {
    case 'MOVIES_FETCH_SUCCEEDED':
      return {
        ...state,
        movies: action.payload.movies,
      }

    case 'MOVIES_FETCH_FAILED':
      return {
        ...state,
        moviesFetchFailedErrorMessage: action.payload.errorMessage,
      }

    case 'SINGLE_MOVIE_FETCH_SUCCEEDED':
      return {
        ...state,
        currentMovie: action.payload.movie,
      }

    case 'SINGLE_MOVIE_FETCH_FAILED':
      return {
        ...state,
        singleMovieFetchFailedErrorMessage: action.payload.errorMessage,
      }

    default:
      return state
  }
}

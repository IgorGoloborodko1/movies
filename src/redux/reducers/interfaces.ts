import { Movie } from '../../utils/interfaces'

export interface MoviesState {
  movies: Movie[]
  moviesFetchFailedErrorMessage: string
  currentMovie: Movie
  singleMovieFetchFailedErrorMessage: string
}

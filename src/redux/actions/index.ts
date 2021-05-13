import { ActionTypes } from './actionTypes'

export const moviesFetchRequested = (): any => ({
  type: ActionTypes.MOVIES_FETCH_REQUESTED,
})

export const moviesFetchSucceded = (movies: any) => ({
  type: ActionTypes.MOVIES_FETCH_SUCCEEDED,
  payload: {
    movies,
  },
})

export const moviesFetchFailed = (errorMessage: any) => ({
  type: ActionTypes.MOVIES_FETCH_FAILED,
  payload: {
    moviesFetchErrorMessage: errorMessage,
  },
})

export const singleMovieFetchRequested = (id: string) => ({
  type: ActionTypes.SINGLE_MOVIE_FETCH_REQUESTED,
  payload: {
    id,
  },
})

export const singleMovieFetchSucceded = (movie: any) => ({
  type: ActionTypes.SINGLE_MOVIE_FETCH_SUCCEEDED,
  payload: {
    movie,
  },
})

export const singleMovieFetchFailed = (errorMessage: any) => ({
  type: ActionTypes.SINGLE_MOVIE_FETCH_FAILED,
  payload: {
    singleMovieFetchErrorMessage: errorMessage,
  },
})

export const deleteMovieRequested = (id: any) => ({
  type: ActionTypes.DELETE_MOVIE_REQUESTED,
  payload: {
    id,
  },
})

export const deleteMovieSucceded = (statusCode: any) => ({
  type: ActionTypes.DELETE_MOVIE_SUCCEEDED,
  payload: {
    statusCode,
  },
})

export const deleteMovieFailed = (errorMessage: any) => ({
  type: ActionTypes.DELETE_MOVIE_FAILED,
  payload: {
    deleteMovieErrorMessage: errorMessage,
  },
})

export const updateMovieRequested = (movie: any) => ({
  type: ActionTypes.UPDATE_MOVIE_REQUESTED,
  payload: {
    movie,
  },
})

export const updateMovieSucceded = (currentMovie: any) => ({
  type: ActionTypes.UPDATE_MOVIE_SUCCEEDED,
  payload: {
    currentMovie,
  },
})

export const updateMovieFailed = (errorMessage: any) => ({
  type: ActionTypes.UPDATE_MOVIE_FAILED,
  payload: {
    updateMovieErrorMessage: errorMessage,
  },
})

export const postMovieRequested = movie => {
  console.log(movie)

  return {
    type: ActionTypes.POST_MOVIE_REQUESTED,
    payload: {
      movie,
    },
  }
}

export const postMovieSucceded = (createdMovie: any) => ({
  type: ActionTypes.POST_MOVIE_SUCCEEDED,
  payload: {
    createdMovie,
  },
})

export const postMovieFailed = (errorMessage: any) => ({
  type: ActionTypes.POST_MOVIE_FAILED,
  payload: {
    postMovieErrorMessage: errorMessage,
  },
})

export const setSelectedMovieRequested = (movie: any) => {
  return {
    type: ActionTypes.SET_SELECTED_MOVIE_REQUESTED,
    payload: {
      movie,
    },
  }
}

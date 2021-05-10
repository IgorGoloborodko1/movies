import axios, { AxiosPromise } from 'axios'
import { moviesFetchFailed } from '../redux/actions'

import { Movie } from '../utils/interfaces'

axios.defaults.baseURL = 'http://localhost:4000'

export const fetchMovies = (queryParams = ''): Promise<AxiosPromise> =>
  axios.get(`/movies/${queryParams}`)

export const fetchMovieById = (id: string): Promise<AxiosPromise> =>
  axios.get(`/movies/${id}`)

export const deleteMovieById = (id: string): Promise<AxiosPromise> =>
  axios.delete(`/movies/${id}`)

// export const postMovie = (movie: Omit<Movie, 'id'>): Promise<AxiosPromise> =>
//   axios.post(`/movies`, movie)

export const postMovie = (movie: any): Promise<AxiosPromise> => {
  console.log('API!!!!!', movie)
  return axios.post(`/movies`, movie)
}
export const updateMovie = (movie: Movie): Promise<AxiosPromise> =>
  axios.put(`/movies`, movie)

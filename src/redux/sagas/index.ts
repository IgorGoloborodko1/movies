import {
  takeLatest,
  call,
  put,
  all,
  ForkEffect,
  AllEffect,
} from 'redux-saga/effects'

import { ActionTypes } from '../actions/actionTypes'
import * as actions from '../actions/index'
import * as API from '../../api/requests'

function* getMovies(id: any) {
  console.log(id)

  try {
    const {
      data: { data },
    } = yield call(API.fetchMovies)
    yield put(actions.moviesFetchSucceded(data))
  } catch (e) {
    yield put(actions.moviesFetchFailed(e.message))
  }
}

function* getSingleMovie({ id }: any) {
  try {
    const {
      data: { data },
    } = yield call(API.fetchMovieById, id)
    yield put(actions.singleMovieFetchSucceded(data))
  } catch (e) {
    yield put(actions.singleMovieFetchFailed(e.message))
  }
}

function* deleteMovie({
  payload,
}: ReturnType<typeof actions.deleteMovieSucceded>) {
  try {
    const { status } = yield call(API.deleteMovieById, payload)
    if (status === 204) {
      yield put(actions.deleteMovieRequested(payload))
    }
  } catch (error) {
    yield put(actions.deleteMovieFailed(error.message))
  }
}

export function* postMovie({
  payload,
}: ReturnType<typeof actions.postMovieSucceded>) {
  console.log('postMovie Saga', payload.movie)

  try {
    yield call(API.postMovie, payload.movie)
  } catch (error) {
    yield put(actions.postMovieFailed(error))
  }
}

export function* updateMovie({
  payload,
}: ReturnType<typeof actions.updateMovie>) {
  try {
    yield call(API.updateMovie, payload)
    yield put(actions.updateMovieSucceded('Movie was edited'))
  } catch (error) {
    yield put(actions.updateMovieFailed(error))
  }
}

export function* watchGetMovies(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(ActionTypes.MOVIES_FETCH_REQUESTED, getMovies)
}

export function* watchGetSingleMovie(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(ActionTypes.SINGLE_MOVIE_FETCH_REQUESTED, getSingleMovie)
}

export function* watchDeleteMovie(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(ActionTypes.DELETE_MOVIE_REQUESTED, deleteMovie)
}

export function* watchUpdateMovie(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(ActionTypes.UPDATE_MOVIE_REQUESTED, updateMovie)
}

export function* watchPostMovie(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(ActionTypes.POST_MOVIE_REQUESTED, postMovie)
}

export function* watchSetSelectedMovie(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(ActionTypes.SET_SELECTED_MOVIE_REQUESTED, setSelectedMovie)
}

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([
    watchGetMovies(),
    watchGetSingleMovie(),
    watchUpdateMovie(),
    watchDeleteMovie(),
    watchPostMovie(),
  ])
}

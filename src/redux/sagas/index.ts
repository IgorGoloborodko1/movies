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

function* getMovies() {
  try {
    const {
      data: { data },
    } = yield call(API.fetchMovies)
    yield put(actions.moviesFetchSucceded(data))
  } catch (e) {
    yield put(actions.moviesFetchFailed(e.message))
  }
}

function* getSingleMovie({
  payload,
}: ReturnType<typeof actions.singleMovieFetchRequested>) {
  try {
    const { data } = yield call(API.fetchMovieById, payload.id)

    yield put(actions.singleMovieFetchSucceded(data))
  } catch (e) {
    yield put(actions.singleMovieFetchFailed(e.message))
  }
}

function* deleteMovie({
  payload,
}: ReturnType<typeof actions.deleteMovieRequested>) {
  try {
    const { status } = yield call(API.deleteMovieById, payload.id)
    if (status === 204) {
      yield put(actions.deleteMovieRequested(payload))
    }
  } catch (error) {
    yield put(actions.deleteMovieFailed(error.message))
  }
}

function* postMovie({
  payload,
}: ReturnType<typeof actions.postMovieRequested>) {
  try {
    yield call(API.postMovie, payload.movie)
  } catch (error) {
    yield put(actions.postMovieFailed(error))
  }
}

function* updateMovie({
  payload,
}: ReturnType<typeof actions.updateMovieRequested>) {
  try {
    yield call(API.updateMovie, payload.movie)
    yield put(actions.updateMovieSucceded('Movie was edited'))
  } catch (error) {
    yield put(actions.updateMovieFailed(error))
  }
}

function* watchGetMovies(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(ActionTypes.MOVIES_FETCH_REQUESTED, getMovies)
}

function* watchGetSingleMovie(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(ActionTypes.SINGLE_MOVIE_FETCH_REQUESTED, getSingleMovie)
}

function* watchDeleteMovie(): Generator<
  ForkEffect<never>,
  void,
  typeof ActionTypes
> {
  yield takeLatest(ActionTypes.DELETE_MOVIE_REQUESTED, deleteMovie)
}

function* watchUpdateMovie(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(ActionTypes.UPDATE_MOVIE_REQUESTED, updateMovie)
}

function* watchPostMovie(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(ActionTypes.POST_MOVIE_REQUESTED, postMovie)
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

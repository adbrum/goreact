import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlayListsTypes } from '../ducks/playlists';

import { getPlaylists } from './playlists';

export default function* rootSaga() {
  yield all([takeLatest(PlayListsTypes.GET_REQUEST, getPlaylists)]);
}

import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlayListsActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlayListsActions.getPlaylistsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

import { all, takeLatest } from 'redux-saga/effects';

import { getTeams, createTeam } from './teams';
import { signIn, signOut } from './auth';

import { AuthTypes } from '../ducks/auth';
import { TeamsTypes } from '../ducks/teams';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
  ]);
}

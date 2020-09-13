import { all } from 'redux-saga/effects';

import memberSaga from './member/sagas';

export default function* rootSaga() {
	yield all([
		memberSaga(),
	]);
}

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './rootReducers';
import rootSagas from './rootSagas';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware /* logger */];
const productionLevel = process.env.REACT_APP_PRODUCTION_LEVEL;

const storeCompose = productionLevel === 'production' ?
	compose(applyMiddleware(...middlewares)) :
	composeWithDevTools(applyMiddleware(...middlewares));

// create store
const store = createStore(
	// combine reducers
	combineReducers({
		...rootReducers,
		router: routerReducer,
	}),

	storeCompose
);

// inject our sagas into the middleware
sagaMiddleware.run(rootSagas);

export {
	store,
	history,
};

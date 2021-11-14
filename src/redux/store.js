import { createStore, combineReducers } from 'redux';
import phoneBookReducer from './phoneBook/phoneBookReducer';

export default createStore(
	combineReducers({
		phoneBookReducer,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

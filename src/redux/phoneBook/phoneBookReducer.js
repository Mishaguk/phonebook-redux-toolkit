import phoneBookTypes from './phoneBookTypes';
import { combineReducers } from 'redux';
const initialState = {
	items: [
		{ id: 1, name: 'Bobby', number: '12345' },
		{ id: 2, name: 'Peter', number: '45343' },
		{ id: 3, name: 'John', number: '78778' },
	],
	filter: '',
};

const items = (state = initialState.items, action) => {
	switch (action.type) {
		case phoneBookTypes.ADD_CONTACT:
			return [...state, action.payload];

		case phoneBookTypes.DELETE_CONTACT:
			return state.filter(contact => contact.id !== action.payload);

		default:
			return state;
	}
};

const filter = (state = initialState.filter, action) => {
	switch (action.type) {
		case phoneBookTypes.FILTER_CONTACT:
			return action.payload;

		default:
			return state;
	}
};

export default combineReducers({ items, filter });

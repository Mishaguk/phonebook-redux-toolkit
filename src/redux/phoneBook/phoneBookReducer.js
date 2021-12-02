import phoneBookActions from './phoneBookActions';
import { combineReducers } from 'redux';
const initialState = {
	items: [],
	filter: '',
};

const items = (state = initialState.items, action) => {
	switch (action.type) {
		case phoneBookActions.contactAdd.type:
			return [...state, action.payload];

		case phoneBookActions.deleteContact.type:
			return state.filter(contact => contact.id !== action.payload);
		case phoneBookActions.filterContact.type:
			return action.payload;

		default:
			return state;
	}
};

const filter = (state = initialState.filter, action) => {
	switch (action.type) {
		case phoneBookActions.loadContacts.type:
			return action.payload;

		default:
			return state;
	}
};

export default combineReducers({ items, filter });

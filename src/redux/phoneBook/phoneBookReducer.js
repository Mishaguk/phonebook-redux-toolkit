import * as actions from './phoneBookActions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
const initialState = {
	items: [],
	filter: '',
	loading: false,
};

const contactAdd = (state, action) => [...state, action.payload];
const deleteContact = (state, action) =>
	state.filter(contact => contact.id !== action.payload);

const items = createReducer(initialState.items, {
	[actions.addContactSucces]: contactAdd,
	[actions.deleteContactSucces]: deleteContact,
	[actions.fetchContactSucces]: (state, action) => action.payload,
});

const filter = createReducer(initialState.filter, {
	[actions.filterContact]: (state, action) => action.payload,
});



const loading = createReducer(initialState.loading, {
	[actions.addContactRequest]: () => true,
	[actions.addContactSucces]: () => false,
	[actions.addContactError]: () => false,
	[actions.deleteContactRequest] : () => true,
	[actions.deleteContactSucces]: () => false,
	[actions.deleteContactError]: () => false,
	[actions.fetchContactRequest]: () => true,
	[actions.fetchContactSucces]: () => false,
	[actions.fetchContactError]: () => false,
});

export default combineReducers({ items, filter, loading });

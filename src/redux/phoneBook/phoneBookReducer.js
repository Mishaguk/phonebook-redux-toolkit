import phoneBookTypes from './phoneBookTypes';
const initialState = {
	contacts: {
		items: [],
		filter: '',
	},
};

const phoneBookReducer = (state = initialState, action) => {
	switch (action.type) {
		case phoneBookTypes.ADD_CONTACT:
			return {
				...state,
				contacts: {
					...state.contacts,
					items: [...state.contacts.items, action.payload],
				},
			};
		case phoneBookTypes.DELETE_CONTACT:
			return state.contacts.items.filter(
				contact => contact.id !== action.payload
			);
		case phoneBookTypes.FILTER_CONTACT:
			return state.filteredContacts;

		default:
			return state;
	}
};

export default phoneBookReducer;

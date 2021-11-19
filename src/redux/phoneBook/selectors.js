export const getContacts = state => state.phoneBookReducer.items;

export const getIsContactExists = name => {
	return state =>
		!!state.phoneBookReducer.items.find(contact => contact.name === name);
};

export const getFilter = state => state.phoneBookReducer.filter;

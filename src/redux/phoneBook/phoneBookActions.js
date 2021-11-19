import phoneBookTypes from './phoneBookTypes';

export const contactAdd = contact => ({
	type: phoneBookTypes.ADD_CONTACT,
	payload: contact,
});

export const deleteContact = id => ({
	type: phoneBookTypes.DELETE_CONTACT,
	payload: id,
});

export const filterContact = filter => ({
	type: phoneBookTypes.FILTER_CONTACT,
	payload: filter,
});

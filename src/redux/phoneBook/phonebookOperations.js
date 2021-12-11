import * as actions from './phoneBookActions';
import axios from 'axios';

export const addContact = contact => dispatch => {
	dispatch(actions.addContactRequest());

	axios
		.post(
			'https://61ae5b08a7c7f3001786f7d3.mockapi.io/api/v1/contacts',
			contact
		)
		.then(response => {
			dispatch(actions.addContactSucces(response.data));
		})
		.catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
	dispatch(actions.deleteContactRequest());
	axios
		.delete(`https://61ae5b08a7c7f3001786f7d3.mockapi.io/api/v1/contacts/${id}`)
		.then(() => dispatch(actions.deleteContactSucces(id)))
		.catch(error => dispatch(actions.deleteContactError(error)));
};

export const fetchContacts = () => dispatch => {
	dispatch(actions.fetchContactRequest());
	axios
		.get('https://61ae5b08a7c7f3001786f7d3.mockapi.io/api/v1/contacts')
		.then(({ data }) => dispatch(actions.fetchContactSucces(data)))
		.catch(error => dispatch(actions.fetchContactError(error)));
};

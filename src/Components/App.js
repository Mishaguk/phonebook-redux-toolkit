import React, { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import InputForm from './InputForm/InputForm';
import Filter from './Filter/Filter';
import { getContacts } from '../redux/phoneBook/selectors';
import { loadContacts } from '../redux/phoneBook/phoneBookActions';

import { useDispatch, useSelector } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts());

	useEffect(() => {
		dispatch(loadContacts(JSON.parse(localStorage.getItem('contacts')) || []));
	}, []);

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts), [contacts]);
	});

	return (
		<div>
			<h1>Phonebook</h1>
			<InputForm />
			<Filter />
			<ContactList />
		</div>
	);
};

export default App;

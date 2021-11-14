import React from 'react';
import ContactList from './ContactList/ContactList';
import InputForm from './InputForm/InputForm';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

const App = () => (
	<div>
		<h1>Phonebook</h1>
		<InputForm />
		<Filter />
		<ContactList />
	</div>
);

export default App;

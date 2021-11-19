import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBookActions';

const Filter = () => {
	const dispatch = useDispatch();
	const [filter, setFilter] = useState('');

	const handleChange = e => {
		setFilter(e.target.value);
		dispatch(actions.filterContact(e.target.value));
	};

	const handleSubmit = e => {
		e.preventDefault();
		//		dispatch(actions.filterContact(filter));
	};

	return (
		<input
			type='text'
			placeholder='Type to filter contacts'
			value={filter}
			onChange={handleChange}
		></input>
	);
};

export default Filter;

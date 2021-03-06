import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBookActions';
import { getFilter } from '../../redux/phoneBook/selectors';

import styles from './Filter.module.css';

const Filter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(getFilter);

	const handleChange = e => {
		dispatch(actions.filterContact(e.target.value));
	};

	return (
		<label className={styles.filter}>
			<span>filter</span>
			<input
				className={styles.input}
				type='text'
				placeholder='Type to filter contacts'
				value={filter}
				onChange={handleChange}
			></input>
		</label>
	);
};

export default Filter;

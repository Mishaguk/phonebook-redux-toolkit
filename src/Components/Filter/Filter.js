import React from 'react';
import { useState } from 'react';

const Filter = ({ value, onChangeFilter }) => {
	const [filter, setFilter] = useState();
	return (
		<input
			type='text'
			placeholder='Type to filter contacts'
			value={value}
			onChange={onChangeFilter}
		></input>
	);
};

export default Filter;

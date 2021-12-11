import styles from './Phonebook.module.css';
import React from 'react';

const ContactItem = React.memo(
	({ contact: { name, phone, id }, onDelete }) =>
		console.log('render', id) ||
		(name && (
			<li>
				<p className={styles.PhonebookText}>
					{name} {phone}
					<button
						type='button'
						className={styles.button}
						onClick={() => onDelete(id)}
					>
						Delete
					</button>
				</p>
			</li>
		))
);

export default ContactItem;

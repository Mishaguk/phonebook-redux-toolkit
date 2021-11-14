import styles from './Phonebook.module.css';

const ContactItem = ({ contact: { name, number }, onDelete }) =>
	name !== undefined && (
		<li>
			<p className={styles.PhonebookText}>
				{name} {number}
				<button type='button' className={styles.button} onClick={onDelete}>
					Delete
				</button>
			</p>
		</li>
	);

export default ContactItem;

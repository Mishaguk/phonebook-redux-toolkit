import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { useCallback } from 'react';
import { deleteContact } from '../../redux/phoneBook/phoneBookActions';
import { getContacts, getFilter } from '../../redux/phoneBook/selectors';

const ContactList = () => {
	const dispatch = useDispatch();
	const filter = useSelector(getFilter);
	const contacts = useSelector(getContacts(filter));

	const handleDelete = useCallback(
		id => dispatch(deleteContact(id)),
		[dispatch]
	);

	return (
		<ul>
			{contacts.map(contact => (
				<ContactItem
					key={contact.id}
					contact={contact}
					onDelete={handleDelete}
				/>
			))}
		</ul>
	);
};

export default ContactList;

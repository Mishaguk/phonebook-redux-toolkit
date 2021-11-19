import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContact } from '../../redux/phoneBook/phoneBookActions';
import { getContacts, getFilter } from '../../redux/phoneBook/selectors';

const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const filteredContacts = filter
		? contacts.filter(({ name }) =>
				name.toLowerCase().includes(filter.toLowerCase())
		  )
		: contacts;

	const handleDelete = id => {
		dispatch(deleteContact(id));
	};
	return (
		<ul>
			{filteredContacts.map(contact => (
				<ContactItem
					key={contact.id}
					contact={contact}
					onDelete={() => handleDelete(contact.id)}
				/>
			))}
		</ul>
	);
};

export default ContactList;

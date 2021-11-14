import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContact } from '../../redux/phoneBook/phoneBookActions';

const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.phoneBookReducer.contacts.items);
	const handleDelete = id => {
		dispatch(deleteContact(id));
	};
	return (
		<ul>
			{contacts.map(contact => (
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

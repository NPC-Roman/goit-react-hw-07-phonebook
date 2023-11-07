import css from './Contacts.module.css';
import { IoIosContact } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getContactList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.contactList}>
      {getContactList.map(({ id, name, number }) => (
        <li key={id} className={css.contactListItem}>
          <IoIosContact
            size="20px"
            color="rgb(85, 75, 75)"
            style={{ marginRight: '5px' }}
          />
          {name}: {number}{' '}
          <button
            type="button"
            onClick={() => dispatch(removeContact(id))}
            className={css.btnContactList}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

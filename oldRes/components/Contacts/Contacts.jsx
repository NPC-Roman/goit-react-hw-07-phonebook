import css from './Contacts.module.css';
import { IoIosContact } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.contactListItem}>
          <IoIosContact
            size="20px"
            color="rgb(85, 75, 75)"
            style={{ marginRight: '5px' }}
          />
          {name}: {phone}{' '}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
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

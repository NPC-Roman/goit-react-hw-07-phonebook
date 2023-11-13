import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/selectors';
import { setContactsFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const arrayContacts = useSelector(selectContacts);
  return (
    <>
      {arrayContacts.length !== 0 && (
        <>
          <h2
            style={{
              marginTop: '20px',
              textAlign: 'center',
              color: 'rgb(145, 122, 122)',
            }}
          >
            Contacts:
          </h2>
          <input
            type="text"
            value={filter}
            onChange={evt =>
              dispatch(setContactsFilter(evt.currentTarget.value))
            }
            className={css.inputContact}
          />
        </>
      )}
    </>
  );
};

export default Filter;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import shortid from 'shortid';

import css from './Form.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const nameFormId = shortid.generate();
  const numberFormId = shortid.generate();
  const dispatch = useDispatch();

  const handleChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.log('Invalid case');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      toast.error(`${name} is alredy in contacts`);
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={nameFormId} className={css.labelForm}>
        Name
      </label>
      <input
        type="text"
        name="name"
        onChange={handleChangeInput}
        id={nameFormId}
        className={css.inputForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={numberFormId} className={css.labelForm}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        onChange={handleChangeInput}
        id={numberFormId}
        className={css.inputForm}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.btnForm}>
        Add to contact
      </button>
    </form>
  );
};

export default Form;

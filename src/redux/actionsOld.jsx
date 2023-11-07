import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/AddContact');

console.log(addContact);

export const deleteContact = createAction('contacts/deleteContact');

export const filterContact = createAction('contacts/filterContact');

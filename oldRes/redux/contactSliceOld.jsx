import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Homer Simpson', number: '777-77-57' },
      { id: 'id-2', name: 'Hermione Kleane', number: '777-77-17' },
      { id: 'id-3', name: 'Harry Potter', number: '777-17-79' },
      { id: 'id-4', name: 'Johnny Silverhand', number: '777-97-76' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;

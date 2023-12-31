import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {

  return state.contacts.items;
};

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => {
      const normalizedFilter = filter.toLowerCase();
      return name.toLowerCase().includes(normalizedFilter);
    });
  }
);

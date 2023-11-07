import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactSlice.name]: contactSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
});

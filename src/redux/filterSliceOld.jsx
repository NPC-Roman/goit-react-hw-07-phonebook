import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    setContactsFilter: (state, action) => {
      console.log(state);
      return action.payload;
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const searchDataSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    setSearchState: (state, action) => {
      state.search = action.payload;
    },
  },
})

export const { setSearchState } = searchDataSlice.actions

export const getSearchState = (state) => state.search;

export default searchDataSlice.reducer;

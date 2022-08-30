import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUserState: (state, action) => {
      state.user = action.payload;
    },
  },
})

export const { setUserState } = userDataSlice.actions

export const saveUserDataAsync = (userData) => (dispatch) => {
    dispatch(saveUserData(userData));
}

export const getUserData = (state) => state.user;

export default userDataSlice.reducer;

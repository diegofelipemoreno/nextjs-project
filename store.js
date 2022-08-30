// Framework dependencies
import { createWrapper } from "next-redux-wrapper";

// Package dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local dependencies
import { authSlice } from "./reducers/authSlice";
import { userDataSlice } from "./reducers/userSlice";
import { searchDataSlice } from "./reducers/searchSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [userDataSlice.name]: userDataSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [searchDataSlice.name]: searchDataSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
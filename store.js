// Framework dependencies
import { createWrapper } from "next-redux-wrapper";

// Package dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local dependencies
import { authSlice } from "./reducers/authSlice";
import { userDataSlice } from "./reducers/userSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [userDataSlice.name]: userDataSlice.reducer,
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetingReducer";
const store = configureStore({
  reducer: {
    greeting: greetingReducer,

  }
});

export default store;
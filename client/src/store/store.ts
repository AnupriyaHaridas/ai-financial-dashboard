// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // auth slice reducer
  },
});

// Type for the RootState (entire Redux state)
export type RootState = ReturnType<typeof store.getState>;

// Type for Dispatch (if needed for action dispatching)
export type AppDispatch = typeof store.dispatch;

export default store;
// store/reducers/authReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface User {
  id: number;
  name: string;
  // Add any other user properties
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;

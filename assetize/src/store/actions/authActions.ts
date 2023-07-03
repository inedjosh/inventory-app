// store/actions/authActions.ts
import { Dispatch } from 'redux';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutUser,
} from '../reducers/authReducer';
import AuthService from '../../services/AuthService';

const authService = new AuthService();

export const login =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(loginStart());
      const user = await authService.login(username, password);
      dispatch(loginSuccess(user));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

export const logout = () => (dispatch: Dispatch) => {
  dispatch(logoutUser());
};

// store/selectors/authSelectors.ts
import { RootState } from '../reducers/rootReducer';

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectError = (state: RootState) => state.auth.error;

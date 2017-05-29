import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
};

export const LOAD_USERS = 'users/LOAD_USERS';
export const loadUsers = createAction(LOAD_USERS);

export const SET_USERS = 'users/SET_USERS';
export const setUsers = createAction(SET_USERS);

export default handleActions({

  [SET_USERS]: (state, action) => ({
    ...state,
    isLoading: true
  }),

}, INITIAL_STATE);
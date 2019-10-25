import {
  REFRESH_USER,
  LOADING_USER,
  SAVING_USER,
  CLEAR_SAVING_USER,
  SAVED_USER
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  isSaving: false,
  userSaved: false,
  loadingUsers: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFRESH_USER: {
      return {
        ...state,
        users: action.payload,
        isSaving: false,
        loadingUsers: false
      };
    }
    case LOADING_USER: {
      return {
        ...state,
        loadingUsers: true
      };
    }
    case SAVING_USER: {
      return {
        ...state,
        isSaving: true
      };
    }
    case SAVED_USER: {
      return {
        ...state,
        userSaved: true
      };
    }
    case CLEAR_SAVING_USER: {
      return {
        ...state,
        userSaved: false
      };
    }
    default:
      return state;
  }
};

import { ADD_USER } from "../actions/types";

const INITIAL_STATE = {
  users: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    default:
      return state;
  }
};

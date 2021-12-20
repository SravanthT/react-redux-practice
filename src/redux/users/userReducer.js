import { INCREASE_USER } from "./userTypes";

const initialUserState = {
  users: 10
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case INCREASE_USER:
      return {
        ...state,
        users: state.users + action.payload
      };
    default:
      return state;
  }
};

export default userReducer;

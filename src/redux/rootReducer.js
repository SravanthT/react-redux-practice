import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  muser: userReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;

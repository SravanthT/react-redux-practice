import { createStore } from "redux";
import rootReducer from "./rootReducer";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";

const store = createStore(rootReducer);

export default store;

import { BUY_ICECREAM } from "./iceCreamTypes";

const initialIceState = {
  numOfIceCreams: 50
};

const iceCreamReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

export default iceCreamReducer;

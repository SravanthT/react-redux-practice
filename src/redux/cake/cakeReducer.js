import { BUY_CAKE } from "./cakeTypes";

const initialCakeState = {
  numOfCakes: 20
};

const carReducer = (state = initialCakeState, aciton) => {
  switch (aciton.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - aciton.payload
      };
    default:
      return state;
  }
};

export default carReducer;

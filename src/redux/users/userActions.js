import { INCREASE_USER } from "./userTypes";

export const increaseUser = (number = 2) => {
  return {
    type: INCREASE_USER,
    payload: number
  };
};

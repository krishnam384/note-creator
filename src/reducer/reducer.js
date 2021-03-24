import { ADD_NOTES } from "./action";

const initialState = [];

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES:
      console.log(action);
      return [...state, action.payload];

    default:
      return state;
  }
};

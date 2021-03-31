import { ADD_NOTES } from "../../action/action";

const initialState = [];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES:
      return [...state, action.payload];

    default:
      return state;
  }
};

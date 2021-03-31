import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../../action/action";

const initialState = {
  isPending: false,
  data: "",
  error: "",
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PENDING:
      console.log("Fetch Pending is called");
      return { ...state, isPending: true };

    case FETCH_SUCCESS:
      console.log("Fetch Data Successfull");
      console.log(action.payload);
      return { ...state, isPending: false, data: action.payload };

    case FETCH_FAILURE:
      console.log("Fetch failure is called ");
      console.log(state);
      return { ...state, isPending: false, error: action.payload };

    default:
      return state;
  }
};

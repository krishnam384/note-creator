import axios from "axios";

export const ADD_NOTES = "ADD_NOTES";
export const ERROR = "ERROR";
export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const addNotes = (note) => {
  return {
    type: ADD_NOTES,
    payload: note,
  };
};

export const handleError = (props) => {
  return {
    type: ERROR,
    props: props,
  };
};

export const fetchSignupPending = () => {
  return {
    type: FETCH_PENDING,
  };
};

export const fetchSignupSuccess = (response) => {
  return {
    type: FETCH_SUCCESS,
    payload: response,
  };
};

export const fetchSignupFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

export const fetchSignupAsync = (user) => {
  return (dispatch) => {
    dispatch(fetchSignupPending());

    axios
      .post("http://localhost:8000/api/v1/users/signup", user)
      .then((response) => {
        dispatch(fetchSignupSuccess(response));
        return response;
      })
      .catch((error) => dispatch(fetchSignupFailure(error)));
  };
};

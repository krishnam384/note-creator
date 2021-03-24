export const ADD_NOTES = "ADD_NOTES";
export const ERROR = "ERROR";

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

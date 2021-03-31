import { createStore, combineReducers, applyMiddleware } from "redux";
import { notesReducer } from "../reducer/NotesReducer/NotesReducer";
import { HandleErrorReducer } from "../reducer/ErrorReducer/handleErrorReducer";
import { SignupReducer } from "../reducer/signupReducer/SignupReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  HandleErrorReducer,
  notesReducer,
  SignupReducer,
});

const middleWares = [thunk];

export default createStore(rootReducers, applyMiddleware(...middleWares));

import { createStore, combineReducers } from "redux";
import { rootReducer } from "../reducer/reducer";
import { HandleErrorReducer } from "../reducer/handleErrorReducer";

const totalReducers = combineReducers({ HandleErrorReducer, rootReducer });

export default createStore(totalReducers);

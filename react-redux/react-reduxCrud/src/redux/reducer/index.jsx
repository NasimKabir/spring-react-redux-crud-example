import { combineReducers } from "redux";
import TutorialsReducer from "./TutorialsReducer";

export default combineReducers({
  tutorials:TutorialsReducer
});

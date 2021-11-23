import { combineReducers } from "redux";
import ChatReducer from "./ChatReducer";

const rootReducer = combineReducers({
  chatReducer: ChatReducer,
});
export default rootReducer;

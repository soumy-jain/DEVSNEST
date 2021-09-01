import { combineReducers } from "redux";
import { trigEmail, trigName } from "./trigRed";

const rootReducer = combineReducers({
    nameChanger: trigName,
    emailChanger: trigEmail
})

export default rootReducer;
  
import { combineReducers } from "redux";
import { placeReducer, placeDataReducer } from "./place";

const rootReducer = combineReducers({place: placeReducer, placeData: placeDataReducer});

export default rootReducer;
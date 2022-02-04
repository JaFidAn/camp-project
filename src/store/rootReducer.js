// combine all reducers in this file

import { combineReducers } from "redux";
import prognoseReducer from "./reducers/prognoseReducer";


const rootReducer = combineReducers({
    prognose: prognoseReducer
    //wee can add all reducers below
})

export default rootReducer;
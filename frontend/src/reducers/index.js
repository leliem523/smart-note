import { combineReducers } from "redux";
import counterReducer from "./counter";
import authenticateReducer from "./authenticate";

const rootReducer = combineReducers({
    counter: counterReducer,
    authenticate: authenticateReducer,
})

export default rootReducer;
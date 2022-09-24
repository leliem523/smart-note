import { combineReducers } from "redux";
import counterReducer from "./counter";
import authenticateReducer from "./authenticate";
import commonReducer from "./common";

const rootReducer = combineReducers({
    counter: counterReducer,
    authenticate: authenticateReducer,
    common: commonReducer,
})

export default rootReducer;
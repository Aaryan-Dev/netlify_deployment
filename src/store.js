import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./Redux/reducer";

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export { store };

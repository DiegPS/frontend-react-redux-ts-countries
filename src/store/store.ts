import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import { allReducers } from "../reducers/reducers"
const store = createStore(allReducers, applyMiddleware(thunk))
export { store }
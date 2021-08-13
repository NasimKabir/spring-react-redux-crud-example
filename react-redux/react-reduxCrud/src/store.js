import { createStore,applyMiddleware } from 'redux';
import AllReducer from './redux/reducer';
import thunk from "redux-thunk" ;
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];
const store = createStore(
    AllReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

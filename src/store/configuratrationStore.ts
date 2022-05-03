import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducers";
import reduxThunk from 'redux-thunk';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

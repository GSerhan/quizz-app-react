import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { quizReducer } from './reducers/app';


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    appStore: quizReducer,
}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
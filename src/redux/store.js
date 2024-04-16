import todoReducer from './todoReducer'
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
        todos: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
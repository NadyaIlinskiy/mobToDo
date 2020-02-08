import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

const reducer = combineReducers({
    auth: authReducer,
    task: taskReducer,
});

export default createStore(reducer, applyMiddleware(thunk));

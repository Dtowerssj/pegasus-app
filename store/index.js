import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import listReducer from './reducers/listReducers';

const rootReducer = combineReducers({
    list: listReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;  

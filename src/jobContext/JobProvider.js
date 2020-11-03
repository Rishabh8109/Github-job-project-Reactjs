import {createStore , applyMiddleware} from "redux";
import {jobReducer} from './jobReducer';
const ReduxThunk = require('redux-thunk').default;

 const store = createStore(jobReducer , applyMiddleware(ReduxThunk));

 export default store;

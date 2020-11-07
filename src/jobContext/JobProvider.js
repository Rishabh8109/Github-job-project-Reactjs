import {createStore , applyMiddleware , combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {jobReducer , jobInfoReducer , themeReducer} from './jobReducer';
const ReduxThunk = require('redux-thunk').default;

const rootJobReducer = combineReducers({
   job : jobReducer,
   jobInfo : jobInfoReducer,
   theme : themeReducer
})

 const store = createStore(rootJobReducer , composeWithDevTools(applyMiddleware(ReduxThunk)));

 export default store;

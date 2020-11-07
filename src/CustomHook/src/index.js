import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StateProvider} from '../src/StateProvider/StateProvider';
import  reducer , {initialState} from '../src/StateProvider/Reducer';

ReactDOM.render(
   <StateProvider initialState={initialState} reducer={reducer}>
      <React.StrictMode>
        <App />
     </React.StrictMode>
   </StateProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from './reducers';
import {Provider} from "react-redux";



const thunkStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={thunkStore}>
        <App />
    </Provider>,


    document.getElementById('root')
);



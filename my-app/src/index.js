import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './reducers/counterReducer';

let allReducers = combineReducers({
	counter : counterReducer
});

let store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const feedback = ({Feelings: 0, Understanding: 0, Support: 0, Comments: 'blah'});

const feedbackReducer = (state = feedback, action) => {
    if(action.type === 'SET_FEELINGS') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);



ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

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

const response = [];

const feelingsReducer = (state = [], action) => {
    if(action.type === 'SET_FEELINGS') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = response, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportedReducer = (state = response, action) => {
    if (action.type === 'SET_SUPPORTED') {
        return action.payload;
    }
    return state;
}

const commentsReducer = (state = response, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}

const reviewReducer = (state = response, action) => {
    if (action.type === 'SET_REVIEW') {
        return action.payload;
    }
    return state;
}

const successReducer = (state = response, action) => {
    if (action.type === 'SET_SUCCESS') {
        return action.payload;
    }
    return state;
}

const landingReducer = (state = response, action) => {
    if (action.type === 'SET_LANDING') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer,
        reviewReducer,
        successReducer,
        landingReducer,



        
    }),
    applyMiddleware(logger)
);



ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

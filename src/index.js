import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


// Reducers
const feelingReducer = (state = [], action) => {
    if(action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = [], action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportedReducer = (state = [], action) => {
    if (action.type === 'SET_SUPPORTED') {
        return action.payload;
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}

const reviewReducer = (state = [], action) => {
    if (action.type === 'SET_REVIEW') {
        return action.payload;
    }
    return state;
}

const successReducer = (state = [], action) => {
    if (action.type === 'SET_SUCCESS') {
        return action.payload;
    }
    return state;
}

const landingReducer = (state = [], action) => {
    if (action.type === 'SET_LANDING') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingReducer,
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

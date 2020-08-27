import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const searchResults = (state = '', action) => {
    if(action.type === 'SET_RESULTS') {
        return  action.payload;
    }
    return state;
}

function* watcherSaga() {
    //every action that matches 'GET_GIPHY' then runs the connected code
    yield takeEvery('GET_RESULTS', getResults);
    //takeLast focuses on the last postElement
}

function* getResults() {
    //make get request
    //try in this context affords the 'catch' here
    try {
        const response = yield axios.get('/search')
        console.log(response.data.data);
        
        console.log(response.data.data.image_original_url );
        //    and then save in redux
        //   in this context is known as a "put"
        yield put({ type: 'SET_RESULTS', payload: response.data.data.image_original_url })
    } catch (error) {
        console.log('error with getGiphy', error);
        
    }
}


const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchResults,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('react-root'));


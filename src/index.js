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

const searchResults = (state = [], action) => {
    if(action.type === 'SET_RESULTS') {
        return  action.payload;
    }
    return state;
}

const favorites = (state = [], action) => {
    if(action.type === 'SET_NEW_FAVORITE') {
        return  action.payload;
    }
    return state;
}

function* watcherSaga() {
    //every action that matches 'GET_GIPHY' then runs the connected function
    yield takeEvery('FETCH_RESULTS', getResults);
   yield takeEvery('ADD_FAVORITE', postFavorite )
}

function* getResults(action) {
    console.log('in generator getResults');
    //try in this context affords the 'catch' here
    try {
        const response = yield axios.put(`/api/search/${action.payload}`)
        console.log(response.data.data);
        yield put({ type: 'SET_RESULTS', payload: response.data.data})
    } catch (error) {
        console.log('error with getGiphy', error);
    }
}

function* postFavorite(action) {
    console.log('in generator getResults');
    //try in this context affords the 'catch' here
    try {
        const response = yield axios.put(`/api/search/${action.payload}`)
        console.log(response.data.data);
<<<<<<< HEAD
        yield put({ type: 'SET_RESULTS', payload: response});
=======
        yield put({ type: 'SET_RESULTS', payload: response})
    } catch (error) {
        console.log('error with POST giphy', error);
    }
>>>>>>> 74a6f2dec4214a2ff14cd2af398066604a007a85
    //takeLast focuses on the last postElement
    }catch (error) {
        console.log('error with postFavorite', error);
    }
}

const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchResults,
        favorites
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('react-root'));
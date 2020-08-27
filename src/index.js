import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

function* watcherSaga() {

}

const SagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(SagaMiddleware, logger),
)

ReactDOM.render(<App />, document.getElementById('react-root'));

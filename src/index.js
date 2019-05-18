import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: reduxFormReducer
})

const logger = store => next => action => {
    let result = next(action)
    return result
}

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

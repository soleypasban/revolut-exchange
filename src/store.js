import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { balance } from './reducers/balance';
import { settings } from './reducers/settings';
import { transactions } from './reducers/transactions';
import { reducer as reduxFormReducer } from 'redux-form';
import { TestStore } from './dictionary/TestStore';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    balance,
    settings,
    transactions
})

const logger = store => next => action => {
    let result = next(action)
    return result
}

const store = createStore(
    rootReducer,
    TestStore,
    compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
)

export { store }

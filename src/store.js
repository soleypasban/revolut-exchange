import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { balance } from './reducers/balance';
import { settings } from './reducers/settings';
import { reducer as reduxFormReducer } from 'redux-form';
// import { VanloMiddleware, QueueMiddleware, PrepareMiddleware, SSDataMiddleware, LoginMiddleware, ConnectorMiddleware, SubscribeMiddleware, PrintMiddleware } from './middlewares';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    balance,
    settings
})

const logger = store => next => action => {
    let result = next(action)
    return result
}

const store = createStore(
    rootReducer,
    undefined,
    compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
)

export { store }

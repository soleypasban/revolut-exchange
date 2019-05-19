import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { getEuropa } from './server';

import { updateExchangeRates } from './actions/settings';
import { RATES_FETCH_INTERVAL } from './dictionary/Currencies';
import './styles/index.css';

const fetchRates = () => {
    getEuropa(rates => store.dispatch(updateExchangeRates(rates)))
    setTimeout(fetchRates, RATES_FETCH_INTERVAL)
}

fetchRates()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

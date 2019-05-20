import React from 'react';
import { Router, Route } from 'react-router-dom'
import { history } from './dictionary/History';
import { AccountsView } from './views/AccountsView';
import { LoginView } from './views/LoginView';
import { ExchangeView } from './views/ExchangeView';
import { DetailsView } from './views/DetailsView';
import { AddMoneyView } from './views/AddMoneyView';
import { AboutView } from './views/AboutView';
import { RatesView } from './views/RatesView';
import { ForgotView } from './views/ForgotView';

const App = () =>
  <div className="r-app noselect">
    <Router history={history}>
      <Route path="/" exact component={LoginView} />
      <Route path="/accounts" component={AccountsView} />
      <Route path="/rates" component={RatesView} />
      <Route path="/exchange" component={ExchangeView} />
      <Route path="/details" component={DetailsView} />
      <Route path="/about" component={AboutView} />
      <Route path="/forgot" component={ForgotView} />
      <Route path="/add" component={AddMoneyView} />
    </Router>
  </div>

export { App };

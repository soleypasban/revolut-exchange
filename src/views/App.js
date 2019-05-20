import React from 'react';
import { Router, Route } from 'react-router-dom'
import { history } from '../dictionary/History';
import { AccountsView } from './AccountsView';
import { LoginView } from './LoginView';
import { ExchangeView } from './ExchangeView';
import { DetailsView } from './DetailsView';
import { AddMoneyView } from './AddMoneyView';
import { AboutView } from './AboutView';
import { RatesView } from './RatesView';
import { ForgotView } from './ForgotView';

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

import React from 'react';
import { Router, Route } from 'react-router-dom'
import history from './dictionary/History';
import { AccountsView } from './views/AccountsView';
import { LoginView } from './views/LoginView';
import { ExchangeView } from './views/ExchangeView';
import { AddMoneyView } from './views/AddMoneyView';

// import { getEuropa } from './server';
// getEuropa(x => console.log(x))

const App = ({ location }) =>
  <div className="r-app noselect">
    <Router history={history}>
      <Route path="/" exact component={LoginView} />
      <Route path="/accounts" component={AccountsView} />
      <Route path="/exchange/:from?/:to?" component={ExchangeView} />
      <Route path="/add" component={AddMoneyView} />
    </Router>
  </div>

export default App;

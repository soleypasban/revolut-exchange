import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import history from './dictionary/History';
import { AccountsView } from './views/AccountsView';
import { LoginView } from './views/LoginView';
import { ExchangeView } from './views/ExchangeView';

function App() {
  return (
    <div className="r-app noselect">
      <Router history={history}>
        <Route path="/" exact component={LoginView} />
        <Route path="/accounts" exact component={AccountsView} />
        <Route path="/exchange" exact component={ExchangeView} />
      </Router>
    </div>
  );
}

export default App;

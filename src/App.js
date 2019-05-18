import React from 'react';
import { AccountsView } from './views/AccountsView';
import { LoginView } from './views/LoginView';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import history from './dictionary/History';

function App() {
  return (
    <div className="r-app noselect">
      <Router history={history}>
        <Route path="/" exact component={LoginView} />
        <Route path="/accounts" exact component={AccountsView} />
      </Router>
    </div>
  );
}

export default App;

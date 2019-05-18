import React from 'react';
import { AccountsView } from './views/AccountsView';
import { LoginView } from './views/LoginView';

const LOGIN_VIEW = 'LOGIN_VIEW'
const ACCOUNTS_VIEW = 'ACCOUNTS_VIEW'

const activeView = ACCOUNTS_VIEW

function App() {
  return (
    <div className="r-app">
      {(activeView === ACCOUNTS_VIEW) && <AccountsView />}
      {(activeView === LOGIN_VIEW) && <LoginView />}
    </div>
  );
}

export default App;

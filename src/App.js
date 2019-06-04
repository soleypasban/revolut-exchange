import React, { useState } from 'react';
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
import { CompleteView } from './views/CompleteView';
import { Language, Transitions } from './context/Language';

const languages = Object.keys(Transitions)

const App = () => {
  const [language, setLanguage] = useState('en')
  const translate = key => (Transitions[language] || Transitions['en'])[key] || key

  return <Language.Provider value={{ translate, language, languages, setLanguage }}>
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
        <Route path="/complete" component={CompleteView} />
      </Router>
    </div>
  </Language.Provider>
}

export { App };

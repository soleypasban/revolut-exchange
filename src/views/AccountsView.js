import React from 'react';
import { BalancesActionController } from '../controllers/BalancesActionController';
import { TransactionsListController } from '../controllers/TransactionsListController';
import { AccountSelector } from '../components/AccountSelector';

const AccountsView = ({ history }) =>
    <div className='r-view'>
        <AccountSelector />
        <BalancesActionController history={history} />
        <TransactionsListController />
    </div>

export { AccountsView };

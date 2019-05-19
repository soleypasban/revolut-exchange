import React from 'react';
import { BalancesActionController } from '../controllers/BalancesActionController';
import { TransactionsListController } from '../controllers/TransactionsListController';

const AccountsView = ({ history }) =>
    <div className='r-view'>
        <BalancesActionController history={history} />
        <TransactionsListController />
    </div>

export { AccountsView };

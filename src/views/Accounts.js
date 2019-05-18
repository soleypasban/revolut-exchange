import React from 'react';
import { BalancesActionController } from '../controllers/BalancesActionController';
import { TransactionsListController } from '../controllers/TransactionsListController';

const Accounts = props =>
    <div className='r-accounts-view'>
        <BalancesActionController />
        <TransactionsListController />
    </div>

export { Accounts };

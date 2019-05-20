import React from 'react';
import { BalancesActionController } from '../controllers/BalancesActionController';
import { TransactionsListController } from '../controllers/TransactionsListController';
import { AccountSelector } from '../components/AccountSelector';
import { Footerbar } from '../components/Footerbar';

const AccountsView = ({ history }) =>
    <div className='r-view'>
        <AccountSelector />
        <BalancesActionController history={history} />
        <TransactionsListController />
        <Footerbar />
    </div>

export { AccountsView };

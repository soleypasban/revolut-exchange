import React, { useState } from 'react';
import { BalancesActionController } from '../controllers/BalancesActionController';
import { TransactionsListController } from '../controllers/TransactionsListController';

const AccountsView = ({ history }) => {
    return (
        <div className='r-view'>
            <BalancesActionController history={history} />
            <TransactionsListController />
        </div>
    )
}

export { AccountsView };

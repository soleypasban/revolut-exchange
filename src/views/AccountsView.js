import React, { useState } from 'react';
import { BalancesActionController } from '../controllers/BalancesActionController';
import { TransactionsListController } from '../controllers/TransactionsListController';

const AccountsView = ({ history }) => {
    const [currency, setCurrency] = useState('eur');

    return (
        <div className='r-view'>
            <BalancesActionController currency={currency} history={history} />
            <TransactionsListController />
        </div>
    )
}

export { AccountsView };

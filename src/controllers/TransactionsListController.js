import React from 'react';
import { Transaction } from '../components/Accounts';

const TransactionsListController = props =>
    <div className='r-accounts-transactions'>
        <Transaction text='Sample Transaction' img='coins' currency='EUR' amount={20.12} />
        <Transaction text='Sample Transaction 2' img='coins' currency='EUR' amount={20.12} />
    </div>

export { TransactionsListController };

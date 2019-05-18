import React from 'react';
import { Transaction } from '../components/Transaction';

const TransactionsListController = props =>
    <div className='r-accounts-transactions'>
        <Transaction text='Sample Transaction' img='coins' currency='eur' amount={20.12} />
        <Transaction text='Sample Transaction 2' img='coins' currency='eur' amount={20.12} />
    </div>

export { TransactionsListController };

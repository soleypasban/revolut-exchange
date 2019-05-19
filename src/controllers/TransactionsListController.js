import React from 'react';
import { Transaction } from '../components/Accounts';

const TransactionsListController = props =>
    <div className='r-accounts-transactions'>
        <Transaction sign='-' text='Sample Transaction' img='coins' currency='EUR' amount={20.12} />
        <Transaction sign='-' text='Sample Transaction 2' img='coins' currency='USD' amount={20.12} />
        <Transaction sign='+' text='Sample Transaction 3' img='coins' currency='TRY' amount={20.12} />
        <Transaction sign='-' text='Sample Transaction 4' img='coins' currency='INR' amount={20.12} />
        <Transaction sign='-' text='Sample Transaction 5' img='coins' currency='GBP' amount={20.12} />
        <Transaction sign='-' text='Sample Transaction 6' img='coins' currency='EUR' amount={20.12} />
    </div>

export { TransactionsListController };


// sign, amount, currency, icon, reason, date
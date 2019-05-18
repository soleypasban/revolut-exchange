import React from 'react';
import { RoundButtons, BalanceValue } from '../components/Accounts';

const BalancesActionController = ({ history, currency }) =>
    <div className='r-accounts-balances'>
        <BalanceValue currency={currency} />
        <div className='r-accounts-actions'>
            <RoundButtons icon='plus' label='Add money' onClick={() => history.push('/add')} />
            <RoundButtons icon='exchange' label='Exchange' onClick={() => history.push('/exchange')} />
            <RoundButtons icon='details' label='Details' onClick={() => alert('details')} />
        </div>
    </div>

export { BalancesActionController };

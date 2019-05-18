import React from 'react';
import { RoundButtons, BalanceValue } from '../components/Accounts';

const BalancesActionController = props =>
    <div className='r-accounts-balances'>
        <BalanceValue currency='eur' />
        <div className='r-accounts-actions'>
            <RoundButtons icon='plus' label='Add money' onClick={() => alert('plus')} />
            <RoundButtons icon='exchange' label='Exchange' onClick={() => alert('exchange')} />
            <RoundButtons icon='details' label='Details' onClick={() => alert('details')} />
        </div>
    </div>

export { BalancesActionController };

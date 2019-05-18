import React from 'react';
import { RoundButtons } from '../components/RoundButtons';
import { BalanceValue } from '../components/BalanceValue';

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

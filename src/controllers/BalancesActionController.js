import React from 'react';
import { RoundButtons, BalanceValue } from '../components/Accounts';

const BalancesActionController = ({ history, currency }) => {

    const onExchangeClicked = () => {
        const to = (currency === 'USD') ? 'EUR' : 'USD'
        history.push(`/exchange/${currency}/${to}`)
    }

    const onAddMoneyClicked = () => {
        history.push(`/add/${currency}`)
    }

    const onDetailsClicked = () => {
        history.push(`/details/${currency}`)
    }

    return (
        <div className='r-accounts-balances'>
            <BalanceValue currency={currency} />
            <div className='r-accounts-actions'>
                <RoundButtons icon='plus' label='Add money' onClick={onAddMoneyClicked} />
                <RoundButtons icon='exchange' label='Exchange' onClick={onExchangeClicked} />
                <RoundButtons icon='details' label='Details' onClick={onDetailsClicked} />
            </div>
        </div>
    )
}

export { BalancesActionController };

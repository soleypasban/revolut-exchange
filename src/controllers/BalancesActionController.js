import React from 'react';
import { connect } from 'react-redux';
import { RoundButtons, BalanceValue } from '../components/Accounts';
import { separateNumberParts } from '../components/helpers/separateNumberParts';

let BalancesActionController = ({ history, currency, amount }) => {

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
            <BalanceValue amount={amount} currency={currency} />
            <div className='r-accounts-actions'>
                <RoundButtons icon='plus' label='Add money' onClick={onAddMoneyClicked} />
                <RoundButtons icon='exchange' label='Exchange' onClick={onExchangeClicked} />
                <RoundButtons icon='details' label='Details' onClick={onDetailsClicked} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.accounts
    const amount = separateNumberParts(state.balance[currency] || 0)
    return { amount, currency }
}

BalancesActionController = connect(mapStateToProps)(BalancesActionController)

export { BalancesActionController };

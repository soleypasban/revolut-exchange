import React from 'react';
import { connect } from 'react-redux';
import { RoundButtons, BalanceValue } from '../components/Accounts';
import { setAddMoneyCurrencyTo, setActiveExchangeTo } from '../actions/settings';
import { separateNumberParts } from '../helpers/numbers';
import { browseTo } from '../dictionary/History';

let BalancesActionController = ({ dispatch, currency, amount }) => {

    const onExchangeClicked = () => {
        const to = (currency === 'USD') ? 'EUR' : 'USD'
        dispatch(setActiveExchangeTo(currency, to))
        browseTo(`/exchange`)
    }

    const onAddMoneyClicked = () => {
        dispatch(setAddMoneyCurrencyTo(currency))
        browseTo(`/add`)
    }

    const onDetailsClicked = () => {
        browseTo(`/details`)
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

import React from 'react';
import { connect } from 'react-redux';
import { separateNumberParts } from '../helpers/separateNumberParts';
import { CurrencySign, CurrencyName } from '../../dictionary/Currencies'

let BalanceValue = ({ amount, currency }) => {
    const decimalsPart = amount.decimals && <span className='r-balance-value-decimal'>{amount.decimals}</span>
    return (
        <div className='r-balance-wrapper'>
            <span className='r-balance-value'>{CurrencySign[currency]}{amount.int}{decimalsPart}</span>
            <span className='r-balance-currency-name'>{currency} - {CurrencyName[currency]}</span>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const amount = separateNumberParts(state.balance[ownProps.currency] || 0)
    return { amount }
}

BalanceValue = connect(mapStateToProps)(BalanceValue)

export { BalanceValue };

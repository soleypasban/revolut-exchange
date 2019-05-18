import React from 'react';
import { CurrencySign, CurrencyName } from '../dictionary/Currencies'

const value = {
    round: 20,
    decimal: 59
}

const BalanceValue = props => {
    const decimalPart = value.decimal && <span className='r-balance-value-decimal'>.{value.decimal}</span>
    return (
        <div className='r-balance-wrapper'>
            <span className='r-balance-value'>{CurrencySign[props.currency]}{value.round}{decimalPart}</span>
            <span className='r-balance-currency-name'>{props.currency.toUpperCase()} - {CurrencyName[props.currency]}</span>
        </div>
    )
}

export { BalanceValue };

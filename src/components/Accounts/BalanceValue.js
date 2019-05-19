import React from 'react';
import { CurrencySign, CurrencyName } from '../../dictionary/Currencies'

const BalanceValue = ({ amount, currency }) => {
    const decimalsPart = amount.decimals && <span className='r-balance-value-decimal'>{amount.decimals}</span>
    return (
        <div className='r-balance-wrapper'>
            <span className='r-balance-value'>{CurrencySign[currency]}{amount.int}{decimalsPart}</span>
            <span className='r-balance-currency-name'>{currency} - {CurrencyName[currency]}</span>
        </div>
    )
}

export { BalanceValue };

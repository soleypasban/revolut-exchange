import React from 'react';
import { CurrencySign } from '../dictionary/Currencies'
import { arrowDown } from '../Icons'

const value = {
    round: 20,
    decimal: 59
}

const CurrencyInput = ({ currency, balance, sign }) => {
    return (
        <div className='r-currency-input-wrapper'>
            <div className='r-currency-input-container'>
                <span className='r-currency-input-name'>{currency.toUpperCase()} {arrowDown}</span>
                <span className='r-currency-input-amount'>{sign}1234</span>
            </div>
            <span className='r-currency-input-balance'>Balance: {CurrencySign[currency]}{balance}</span>
        </div>
    )
}

export { CurrencyInput };

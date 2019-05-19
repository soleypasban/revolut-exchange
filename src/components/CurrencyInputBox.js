import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field'
import NumberFormat from 'react-number-format';
import { CurrencySign } from '../dictionary/Currencies'
import { arrowDown } from '../Icons'

const MAX = 999999

const CurrencyInputBox = ({ currency, balance, sign, value, max, onChangeCurrency, onChange }) => {
    const [active, setActive] = useState(false);
    const setAmounntValue = ({ value }) => active && onChange && onChange(value)
    const isNumberValid = input => Math.abs(input.floatValue || 0) < (max || MAX)

    return (
        <div className='r-currency-input-wrapper'>
            <div className='r-currency-input-container'>
                <span className='r-currency-input-name' onClick={onChangeCurrency}>{currency.toUpperCase()} {arrowDown}</span>
                <span className='r-currency-input-amount'>
                    <NumberFormat
                        className='r-currency-input-amount-box'
                        onValueChange={setAmounntValue}
                        value={value === 0 ? '' : value}
                        thousandSeparator={true}
                        prefix={sign}
                        placeholder="0"
                        decimalScale={2}
                        allowNegative={false}
                        isAllowed={isNumberValid}
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                    />
                </span>
            </div>

            <span className='r-currency-input-balance'>Balance: {CurrencySign[currency]}
                <NumberFormat
                    value={balance || 0}
                    thousandSeparator={true}
                    displayType='text'
                    decimalScale={2}
                />
            </span>
        </div>
    )
}

export { CurrencyInputBox };

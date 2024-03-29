import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { CurrencySign } from '../dictionary/Currencies'
import { arrowDown } from '../images/Icons'
import { MAX_INPUT_VALUE } from '../dictionary/Amounts';


const CurrencyInputBox = ({ notEnoughBalance, disabled, currency, balance, value, onChangeCurrency, onChange }) => {
    const [active, setActive] = useState(false);
    const setAmounntValue = ({ value }) => active && onChange && onChange(value)
    const isNumberValid = input => Math.abs(input.floatValue || 0) < MAX_INPUT_VALUE
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
                        placeholder="0"
                        decimalScale={2}
                        allowNegative={false}
                        isAllowed={isNumberValid}
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        allowEmptyFormatting={true}
                        disabled={disabled}
                    />
                </span>
                {/* {sign && <span className='r-currency-input-sign'>{sign}</span>} */}
            </div>

            <span className={`r-currency-input-balance ${notEnoughBalance ? 'r-currency-input-balance-below' : ''}`}>Balance: {CurrencySign[currency]}
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

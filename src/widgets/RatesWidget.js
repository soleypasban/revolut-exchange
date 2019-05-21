import React from 'react';
import { CurrencySign } from '../dictionary/Currencies'
import { Flags } from '../images/Flags';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { CurrencySelector } from '../components/CurrencySelector';
import NumberFormat from 'react-number-format';
import { View } from '../components/View'
import { getFormattedNumber } from '../helpers/numbers';

let RatesWidget = ({
    account,
    currentBalance,
    amount,
    setAmount,
    onChangeCurrency,
    list,
    showSelector,
    onSelectCurrency
}) =>
    <View>
        <div className='r-rates-title'>
            Check <b>{account}</b> against other currencies!
            </div>
        <div className='r-rates-from'>
            <CurrencyInputBox
                balance={currentBalance}
                currency={account}
                value={amount}
                onChange={setAmount}
                onChangeCurrency={onChangeCurrency}
            />
        </div>
        <div className='r-rates-container'>
            {list.map((currency, key) => <AccountRow {...{ key, ...currency }} />)}
        </div>
        {showSelector && <CurrencySelector selected={showSelector.selected} onSelectCurrency={onSelectCurrency} />}
    </View>

export const AccountRow = ({ label, exchangeValue }) =>
    <div className='r-rate-row'>
        <span className='r-rate-label'>
            <img src={Flags[label]} className='r-rate-icon' alt='' />
            {label}
        </span>
        <span className='r-rate-current'>
            <NumberFormat
                value={getFormattedNumber(exchangeValue) || 0}
                thousandSeparator={true}
                displayType='text'
                decimalScale={2}
                prefix={CurrencySign[label]}
            />
        </span>
    </div>

export { RatesWidget };

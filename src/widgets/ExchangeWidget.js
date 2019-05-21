import React from 'react';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { RateBox } from '../components/RateBox';
import { SwapRate } from '../components/SwapRate';
import { CurrencySelector } from '../components/CurrencySelector';
import { View } from '../components/View'

const ExchangeWidget = ({

    notEnoughBalance,
    balances,
    convert,
    amounts,
    onFromChange,
    onChangeCurrencyFrom,
    swapCurrencies,
    exchangeRate,
    onToChange,
    onChangeCurrencyTo,
    fromEmpty,
    exchangeMoney,
    showSelector,
    onSelectCurrency,
    inputsDisabled

}) =>
    <View title='Exchange' >
        <div className='r-exchange-top-wrapper'>
            <div className='r-exchange-from-container'>
                <CurrencyInputBox disabled={inputsDisabled} notEnoughBalance={notEnoughBalance} balance={balances.from} currency={convert.from} sign='-' value={amounts.from} onChange={onFromChange} onChangeCurrency={onChangeCurrencyFrom} />
            </div>
        </div>
        <div className='r-exchange-bottom-wrapper'>
            <div className='r-exchange-rate-container'>
                <SwapRate onClick={swapCurrencies} />
                <RateBox from={convert.from} to={convert.to} rate={exchangeRate} />
                <span />
            </div>
            <div className='r-exchange-to-container'>
                <CurrencyInputBox disabled={inputsDisabled} balance={balances.to} currency={convert.to} sign='+' value={amounts.to} onChange={onToChange} onChangeCurrency={onChangeCurrencyTo} />
            </div>
            <div className='r-exchange-button-container'>
                <ActionButton disabled={notEnoughBalance || fromEmpty || inputsDisabled} label='Exchange' onClick={exchangeMoney} />
            </div>
        </div>
        {showSelector && <CurrencySelector selected={showSelector.selected} onSelectCurrency={onSelectCurrency} />}
    </View>

export { ExchangeWidget };

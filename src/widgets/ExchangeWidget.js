import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { RateBox } from '../components/RateBox';
import { SwapRate } from '../components/SwapRate';
import { CurrencySelector } from '../components/CurrencySelector';
import { browseTo } from '../dictionary/History';
import { Footerbar } from '../components/Footerbar';

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
    onSelectCurrency

}) =>
    <div className='r-view'>
        <PageHeader label='Exchange' onClose={() => browseTo('/accounts')} />
        <div className='r-exchange-top-wrapper'>
            <div className='r-exchange-from-container'>
                <CurrencyInputBox notEnoughBalance={notEnoughBalance} balance={balances.from} currency={convert.from} sign='-' value={amounts.from} onChange={onFromChange} onChangeCurrency={onChangeCurrencyFrom} />
            </div>
        </div>
        <div className='r-exchange-bottom-wrapper'>
            <div className='r-exchange-rate-container'>
                <SwapRate onClick={swapCurrencies} />
                <RateBox from={convert.from} to={convert.to} rate={exchangeRate} />
                <span />
            </div>
            <div className='r-exchange-to-container'>
                <CurrencyInputBox balance={balances.to} currency={convert.to} sign='+' value={amounts.to} onChange={onToChange} onChangeCurrency={onChangeCurrencyTo} />
            </div>
            <div className='r-exchange-button-container'>
                <ActionButton disabled={notEnoughBalance || fromEmpty} label='Exchange' onClick={exchangeMoney} />
            </div>
        </div>

        <Footerbar />
        {showSelector && <CurrencySelector selected={showSelector.selected} onSelectCurrency={onSelectCurrency} />}
    </div>

export { ExchangeWidget };

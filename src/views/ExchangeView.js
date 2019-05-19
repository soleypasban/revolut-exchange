import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { RateBox } from '../components/RateBox';
import { SwapRate } from '../components/SwapRate';

const ExchangeView = ({ match, history }) => {

    const rate = 1.1524
    const [amounts, setAmounts] = useState({ from: 0, to: 0 });
    const [convert, setConvert] = useState({ from: match.params.from, to: match.params.to });

    const onChangeCurrencyFrom = () => alert('chaneg from')
    const onChangeCurrencyTo = () => alert('chaneg to')

    const onFromChange = (value) => setAmounts({ from: value, to: value * rate })
    const onToChange = (value) => setAmounts({ from: value, to: value / rate })

    const swapCurrencies = () => {
        setConvert({ from: convert.to, to: convert.from })
        setAmounts({ from: amounts.to, to: amounts.from })
    }

    const balances = {
        eur: 15.25,
        usd: 20.11
    }

    return (
        <div className='r-view'>
            <PageHeader label='Exchange' onClose={() => history.push('/accounts')} />
            <div className='r-exchange-top-wrapper'>
                <div className='r-exchange-from-container'>
                    <CurrencyInputBox balance={balances[convert.from]} currency={convert.from} sign='-' value={amounts.from} onChange={onFromChange} onChangeCurrency={onChangeCurrencyFrom} />
                </div>
            </div>
            <div className='r-exchange-bottom-wrapper'>
                <div className='r-exchange-rate-container'>
                    <SwapRate onClick={swapCurrencies} />
                    <RateBox from={match.params.from} to={match.params.to} rate={rate} />
                    <span />
                </div>
                <div className='r-exchange-to-container'>
                    <CurrencyInputBox balance={balances[convert.to]} currency={convert.to} sign='+' value={amounts.to} onChange={onToChange} onChangeCurrency={onChangeCurrencyTo} />
                </div>
                <div className='r-exchange-button-container'>
                    <ActionButton label='Exchange' />
                </div>
            </div>
        </div>
    )
}

export { ExchangeView };

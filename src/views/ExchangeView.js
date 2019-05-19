import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { RateBox } from '../components/RateBox';
import { SwapRate } from '../components/SwapRate';

let ExchangeView = ({ exchange, balances, exchangeRate, history }) => {

    const [amounts, setAmounts] = useState({ from: 0, to: 0 });
    const [convert, setConvert] = useState(exchange);

    const onChangeCurrencyFrom = () => alert('chaneg from')
    const onChangeCurrencyTo = () => alert('chaneg to')

    const onFromChange = (value) => setAmounts({ from: value, to: value * exchangeRate })
    const onToChange = (value) => setAmounts({ from: value, to: value / exchangeRate })

    const swapCurrencies = () => {
        setConvert({ from: convert.to, to: convert.from })
        setAmounts({ from: amounts.to, to: amounts.from })
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
                    <RateBox from={convert.from} to={convert.to} rate={exchangeRate} />
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

const mapStateToProps = (state) => {
    const exchangeRate = state.settings.exchangeRate || 1
    const exchange = state.settings.currencies.exchange
    const balances = {
        [exchange.from]: (state.balance[exchange.from] || 0),
        [exchange.to]: (state.balance[exchange.to] || 0)
    }
    console.log({ exchange, balances, exchangeRate })
    return { exchange, balances, exchangeRate }
}

ExchangeView = connect(mapStateToProps)(ExchangeView)

export { ExchangeView };

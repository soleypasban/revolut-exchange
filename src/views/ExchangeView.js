import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { RateBox } from '../components/RateBox';
import { SwapRate } from '../components/SwapRate';
import { removeMoney, addMoney } from '../actions/balance';
import { logTransaction } from '../actions/transactions'
import { MAX_INPUT_VALUE } from '../dictionary/Amounts';
import { CurrencySign } from '../dictionary/Currencies'
import { CurrencySelector } from '../components/CurrencySelector';
import { setActiveCurrencyTo } from '../actions/settings';

let ExchangeView = ({ exchange, balance, rates, history, dispatch }) => {
    const [showSelector, setShowSelectorFor] = useState(null);

    const [amounts, setAmounts] = useState({ from: 0, to: 0 });
    const [convert, setConvert] = useState(exchange);

    console.log(rates, Number(rates[convert.from]) , Number(rates[convert.to]))

    const exchangeRate = rates ? (Number(rates[convert.from]) / Number(rates[convert.to])) : 1

    const onChangeCurrencyFrom = () => setShowSelectorFor({ type: 'FROM', selected: convert.from })
    const onChangeCurrencyTo = () => setShowSelectorFor({ type: 'TO', selected: convert.to })

    const onFromChange = (value) => {
        const from = Math.min(value, MAX_INPUT_VALUE)
        setAmounts({ from, to: from * exchangeRate })
    }

    const onToChange = (value) => {
        const to = Math.min(value, MAX_INPUT_VALUE)
        setAmounts({ to, from: to * exchangeRate })
    }

    const swapCurrencies = () => {
        setConvert({ from: convert.to, to: convert.from })
        setAmounts({ from: amounts.to, to: amounts.from })
    }

    const onSelectCurrency = selection => {
        if (selection) {
            const type = showSelector.type
            if (type === 'FROM') {
                if (selection === convert.to) swapCurrencies();
                else setConvert({ from: selection, to: convert.to })
            } else if (type === 'TO') {
                if (selection === convert.from) swapCurrencies();
                else setConvert({ from: convert.from, to: selection })
            }
        }
        setShowSelectorFor(null)
    }

    const fromEmpty = !(Math.abs(amounts.from) > 0)
    const balances = {
        from: (balance[convert.from] || 0),
        to: (balance[convert.to] || 0)
    }
    const notEnoughBalance = (Number(balances.from) < Number(Math.abs(amounts.from)))

    const exchangeMoney = () => {

        const from = Math.abs(amounts.from)
        const to = Math.abs(amounts.to)

        const transactionFrom = {
            sign: '-',
            amount: from,
            currency: convert.from,
            icon: 'transaction',
            description: `Exchanged to ${convert.to}`,
            date: 'Today',
            info: `+${CurrencySign[convert.to]}${to}`
        }

        const transactionTo = {
            sign: '+',
            amount: to,
            currency: convert.to,
            icon: 'transaction',
            description: `Exchanged from ${convert.from}`,
            date: 'Today',
            info: `-${CurrencySign[convert.from]}${from}`
        }

        dispatch(logTransaction(transactionFrom))
        dispatch(logTransaction(transactionTo))

        dispatch(removeMoney(convert.from, from))
        dispatch(addMoney(convert.to, to))

        dispatch(setActiveCurrencyTo(convert.to))

        history.push('/accounts')
    }

    return (
        <div className='r-view'>
            <PageHeader label='Exchange' onClose={() => history.push('/accounts')} />
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
            {showSelector && <CurrencySelector selected={showSelector.selected} onSelectCurrency={onSelectCurrency} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    const rates = state.settings.rates || {}
    const exchange = state.settings.currencies.exchange
    const balance = state.balance
    return { exchange, balance, rates }
}

ExchangeView = connect(mapStateToProps)(ExchangeView)

export { ExchangeView };

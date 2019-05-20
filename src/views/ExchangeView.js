import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MAX_INPUT_VALUE } from '../dictionary/Amounts';
import { setActiveCurrencyTo } from '../actions/settings';
import { browseTo } from '../dictionary/History';
import { ExchangeWidget } from '../widgets/ExchangeWidget';
import { convertCurrencies } from '../helpers/convertCurrencies';

let ExchangeView = ({ exchange, balance, rates, dispatch }) => {
    const [showSelector, setShowSelectorFor] = useState(null);
    const [amounts, setAmounts] = useState({ from: 0, to: 0 });
    const [convert, setConvert] = useState(exchange);

    const onChangeCurrencyFrom = () => {
        setShowSelectorFor({ side: 'FROM', selected: convert.from })
    }

    const onChangeCurrencyTo = () => {
        setShowSelectorFor({ side: 'TO', selected: convert.to })
    }

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
            const side = showSelector.side
            if (side === 'FROM') {
                if (selection === convert.to) swapCurrencies();
                else setConvert({ from: selection, to: convert.to })
            } else if (side === 'TO') {
                if (selection === convert.from) swapCurrencies();
                else setConvert({ from: convert.from, to: selection })
            }
        }
        setShowSelectorFor(null)
    }

    const fromEmpty = !(Math.abs(amounts.from) > 0)
    const balances = { from: (balance[convert.from] || 0), to: (balance[convert.to] || 0) }
    const exchangeRate = rates ? (Number(rates[convert.from]) / Number(rates[convert.to])) : 1
    const notEnoughBalance = (Number(balances.from) < Number(Math.abs(amounts.from)))

    const exchangeMoney = () => {
        convertCurrencies(dispatch, amounts, convert)
        dispatch(setActiveCurrencyTo(convert.to))
        browseTo('/accounts')
    }

    const props = {
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
    }

    return <ExchangeWidget  {...props} />
}

const mapStateToProps = (state) => {
    const rates = state.settings.rates || {}
    const exchange = state.settings.currencies.exchange
    const balance = state.balance
    return { exchange, balance, rates }
}

ExchangeView = connect(mapStateToProps)(ExchangeView)

export { ExchangeView };

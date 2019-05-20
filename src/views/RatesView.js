import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CurrencyName } from '../dictionary/Currencies'
import { RatesWidget } from '../widgets/RatesWidget';

let RatesView = ({ currency, balance, rates }) => {

    const [showSelector, setShowSelectorFor] = useState(null);
    const [account, setAccount] = useState(currency);
    const [amount, setAmount] = useState(0);
    const currentBalance = (balance[account] || 0)

    const onChangeCurrency = () => {
        setShowSelectorFor({ selected: account })
    }

    const onSelectCurrency = selection => {
        selection && setAccount(selection)
        setShowSelectorFor(null)
    }

    const list = Object.keys(CurrencyName).map(label => {
        const exchangeValue = amount * (rates ? (Number(rates[account]) / Number(rates[label])) : 1)
        return { label, exchangeValue }
    })

    const props = {
        account,
        currentBalance,
        amount,
        setAmount,
        onChangeCurrency,
        list,
        showSelector,
        onSelectCurrency
    }

    return <RatesWidget {...props} />
}

const mapStateToProps = (state) => {
    const rates = state.settings.rates || {}
    const currency = state.settings.currencies.add
    const balance = state.balance
    return { balance, currency, rates }
}

RatesView = connect(mapStateToProps)(RatesView)

export { RatesView };

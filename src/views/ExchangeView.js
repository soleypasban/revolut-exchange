import React, { useState  } from 'react';
// import  { useEffect } from 'react';
// import { getEuropa } from '../server';
import { connect } from 'react-redux';
import { MAX_INPUT_VALUE } from '../dictionary/Amounts';
import { setActiveCurrencyTo, setCompleteMessageTo } from '../actions/settings';
import { browseTo } from '../dictionary/History';
import { ExchangeWidget } from '../widgets/ExchangeWidget';
import { convertCurrencies } from '../helpers/convertCurrencies';
import { getFormattedNumber } from '../helpers/numbers';

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
        setAmounts({ from, to: getFormattedNumber(from * exchangeRate) })
    }

    const onToChange = (value) => {
        const to = Math.min(value, MAX_INPUT_VALUE)
        setAmounts({ to, from: getFormattedNumber(to * exchangeRate) })
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

    const exchangeRate = rates ? (Number(rates[convert.from]) / Number(rates[convert.to])) : 0
    const fromEmpty = !(Math.abs(amounts.from) > 0) || (exchangeRate === 0)
    const balances = { from: (balance[convert.from] || 0), to: (balance[convert.to] || 0) }
    const notEnoughBalance = (Number(balances.from) < Number(Math.abs(amounts.from)))
    const inputsDisabled = exchangeRate === 0

    const exchangeMoney = () => {
        const { tFrom, tTo } = convertCurrencies(dispatch, amounts, convert)
        dispatch(setActiveCurrencyTo(convert.from))
        dispatch(setCompleteMessageTo({
            icon: 'succeed',
            description: `You exchanged ${tTo.value} to ${tFrom.value}`
        }))
        browseTo('/complete')
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
        onSelectCurrency,
        inputsDisabled
    }

    /*
    useEffect(() => {
        let fetchRateIntervalId = 0

        const fetchRates = () => {
            getEuropa(rates => {
                // store.dispatch(updateExchangeRates(rates))
                console.log('Fetching rate...', rates)
                // setRates(rates)
            }
            )
            fetchRateIntervalId = setTimeout(fetchRates, 2000)
        }

        fetchRates()

        return () => {
            clearInterval(fetchRateIntervalId)
            console.log('clear rate...')
        }

    }, []);
    */

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

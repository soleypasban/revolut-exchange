import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CurrencySign, CurrencyName } from '../dictionary/Currencies'
import { Flags } from '../images/Flags';
import { Footerbar } from '../components/Footerbar';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { CurrencySelector } from '../components/CurrencySelector';
import NumberFormat from 'react-number-format';

let RatesView = ({ currency, selected, balance, rates }) => {

    const [showSelector, setShowSelectorFor] = useState(null);
    const [account, setAccount] = useState(currency);
    const [amount, setAmount] = useState(0);
    const currentBalance = (balance[account] || 0)

    const onChangeCurrency = () => setShowSelectorFor({ selected: account })

    const onSelectCurrency = selection => {
        if (selection) {
            setAccount(selection)
        }
        setShowSelectorFor(null)
    }

    const list = Object.keys(CurrencyName)
        .map(label => {
            const exchangeValue = amount * (rates ? (Number(rates[account]) / Number(rates[label])) : 1)
            return <AccountRow {...{ key: label, label, exchangeValue, selected }} />
        })

    return (
        <div className='r-view'>
            <div className='r-rates-title'>
                Check <b>{account}</b> against other currencies!
            </div>
            <div className='r-rates-from'>
                <CurrencyInputBox
                    balance={currentBalance}
                    currency={account}
                    sign='+'
                    value={amount}
                    onChange={amount => setAmount(amount)}
                    onChangeCurrency={onChangeCurrency}
                />
            </div>
            <div className='r-rates-container'>
                {list}
            </div>
            <Footerbar />
            {showSelector && <CurrencySelector selected={showSelector.selected} onSelectCurrency={onSelectCurrency} />}
        </div>
    )
}

const AccountRow = ({ label, exchangeValue, selected }) =>
    <div className='r-rate-row'>
        <span className='r-rate-label'>
            <img src={Flags[label]} className='r-rate-icon' alt='' />
            {label}
        </span>
        <span className='r-rate-current'>
            <NumberFormat
                value={exchangeValue || 0}
                thousandSeparator={true}
                displayType='text'
                decimalScale={2}
                prefix={CurrencySign[label]}
            />
        </span>
    </div>

const mapStateToProps = (state) => {
    const rates = state.settings.rates || {}
    const currency = state.settings.currencies.add
    const balance = state.balance
    return { balance, currency, rates }
}

RatesView = connect(mapStateToProps)(RatesView)

export { RatesView };

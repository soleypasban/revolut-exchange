import React from 'react';
import { connect } from 'react-redux';
import { setActiveCurrencyTo } from '../actions/settings'
import { CurrencySign, CurrencyName } from '../dictionary/Currencies'

let AccountSelector = ({ currency, dispatch }) => {
    const onSelectCurrency = label => dispatch(setActiveCurrencyTo(label))

    const list = Object.keys(CurrencyName)
        .map(label => <AccountButton {...{ key: label, label, onSelectCurrency, currency }} />)
        
    return (
        <div className='r-account-selector-wrapper'>
            {list}
        </div>
    )
}

const AccountButton = ({ label, onSelectCurrency, currency }) =>
    <span onClick={() => onSelectCurrency(label)}
        className={`r-account-selector-name ${(label === currency) ? 'r-account-selector-active' : ''}`}>
        <span className='r-account-selector-sign'>
            {CurrencySign[label]}
        </span>
        {label}
    </span>

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.accounts
    return { currency }
}

AccountSelector = connect(mapStateToProps)(AccountSelector)

export { AccountSelector };

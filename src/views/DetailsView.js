import React from 'react';
import { connect } from 'react-redux';
import { CurrencyName, CurrencySign } from '../dictionary/Currencies'
import { Flags } from '../images/Flags';
import { View } from '../components/View'

let DetailsView = ({ currency, amount }) =>
    <View title='Account details'>
        <div className='r-details-gradient' />
        <img className='r-details-flag-icon' src={Flags[currency]} alt='' />
        <div className='r-details-balance-amount'>{CurrencySign[currency]}{amount}</div>
        <div className='r-details-account-name'>{CurrencyName[currency]} account</div>
    </View>

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.accounts
    const amount = (state.balance[currency] || 0).toFixed(2)
    return { amount, currency }
}

DetailsView = connect(mapStateToProps)(DetailsView)

export { DetailsView };

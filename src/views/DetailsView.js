import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import { CurrencyName, CurrencySign } from '../dictionary/Currencies'
import { Flags } from '../images/Flags';

let DetailsView = ({ history, currency, amount }) => {
    return (
        <div className='r-view'>
            <PageHeader label='Account details' onClose={() => history.push('/accounts')} />
            <div className='r-details-gradient' />
            <img className='r-details-flag-icon' src={Flags[currency]} alt='' />
            <div className='r-details-balance-amount'>{CurrencySign[currency]}{amount}</div>
            <div className='r-details-account-name'>{CurrencyName[currency]} account</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.accounts
    const amount = (state.balance[currency] || 0).toFixed(2)
    return { amount, currency }
}

DetailsView = connect(mapStateToProps)(DetailsView)

export { DetailsView };

import React  from 'react';
import { connect } from 'react-redux';
import { CurrencySign, CurrencyName } from '../dictionary/Currencies'
import { Flags } from '../images/Flags';
import { checkIcon } from '../images/Icons';

let CurrencySelector = ({ selected, balance, onSelectCurrency }) => {
    const list = Object.keys(CurrencyName)
        .map(label => <AccountRow {...{ key: label, label, balance: balance[label], onSelectCurrency, selected }} />)

    return (
        <div className='r-currency-selector-wrapper' onClick={() => onSelectCurrency(null)}>
            <div className='r-currency-selector-container'>
                <div className='r-currency-selector-title'>
                    Choose currency
                </div>
                {list}
            </div>
        </div>
    )
}

const AccountRow = ({ label, onSelectCurrency, balance, selected }) =>
    <div onClick={(e) => {
        onSelectCurrency(label)
        e.stopPropagation()
    }} className='r-currency-selector-row'>
        <span className='r-currency-selector-label'>
            <img src={Flags[label]} className='r-currency-selector-icon' alt={CurrencySign[label]} />
            {label} - {(balance || 0).toFixed(2)}
        </span>
        <span className='r-currency-selector-current'>
            {(label === selected) && checkIcon}
        </span>
    </div>

const mapStateToProps = (state) => {
    const balance = state.balance
    return { balance }
}

CurrencySelector = connect(mapStateToProps)(CurrencySelector)

export { CurrencySelector };
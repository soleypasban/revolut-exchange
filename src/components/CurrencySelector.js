import React from 'react';
import { connect } from 'react-redux';
import { CurrencySign, CurrencyName } from '../dictionary/Currencies'
import { Flags } from '../images/Flags';
import { checkIcon } from '../images/Icons';
import { useSpring, animated, config } from 'react-spring'

let CurrencySelector = ({ selected, balance, onSelectCurrency }) => {
    const list = Object.keys(CurrencyName)
        .map(label => <AccountRow {...{ key: label, label, balance: balance[label], onSelectCurrency, selected }} />)

    const animProps = useSpring({
        config: { ...config.gentle, clamp: true },
        position: 'absolute', width: '100%', opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: window.innerHeight }
    })

    return (
        <div className='r-currency-selector-wrapper' onClick={() => onSelectCurrency(null)}>
            <animated.div style={animProps}>
                <div className='r-currency-selector-container'>
                    <div className='r-currency-selector-title'>
                        Choose currency
                </div>
                    {list}
                </div>
            </animated.div>
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
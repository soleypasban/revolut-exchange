import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { addMoney } from '../actions/balance'

let AddMoneyView = ({ dispatch, history, currentBalance, currency }) => {
    const [amount, setAmount] = useState(0);

    const addMoneyAndGoBack = () => {
        dispatch(addMoney(currency, amount))
        history.push('/accounts')
    }

    return (
        <div className='r-view'>
            <PageHeader label='Add money' onClose={() => history.push('/accounts')} />
            <div className='r-add-top-wrapper'>
                <div className='r-exchange-from-container'>
                    <CurrencyInputBox
                        balance={currentBalance}
                        currency={currency}
                        sign='+'
                        value={amount}
                        onChange={amount => setAmount(amount)}
                        onChangeCurrency={() => alert('onChangeCurrency')}
                    />
                </div>
            </div>
            <div className='r-add-bottom-wrapper'>
                <div className='r-add-button-container'>
                    <ActionButton label='Add money' onClick={addMoneyAndGoBack} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.add
    const currentBalance = (state.balance[currency] || 0)
    return { currentBalance, currency }
}

AddMoneyView = connect(mapStateToProps)(AddMoneyView)

export { AddMoneyView };

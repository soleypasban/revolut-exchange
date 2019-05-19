import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { addMoney } from '../actions/balance'
import { logTransaction } from '../actions/transactions'

let AddMoneyView = ({ dispatch, history, currentBalance, currency }) => {
    const [amount, setAmount] = useState(0);

    const addMoneyAndGoBack = () => {
        const transaction = {
            sign: '+',
            amount,
            currency,
            icon: 'topup',
            description: 'Added to balance',
            date: 'Today',
            info: 'Visa 1234'
        }
        dispatch(addMoney(currency, amount))
        dispatch(logTransaction(transaction))
        
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
                    <ActionButton disabled={!(Math.abs(amount) > 0)} label='Add money' onClick={addMoneyAndGoBack} />
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

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PageHeader } from '../components/PageHeader';
import { ActionButton } from '../components/ActionButton';
import { CurrencyInputBox } from '../components/CurrencyInputBox';
import { addMoney } from '../actions/balance'
import { logTransaction } from '../actions/transactions'
import { CurrencySelector } from '../components/CurrencySelector';
import { setActiveCurrencyTo } from '../actions/settings';
import { Footerbar } from '../components/Footerbar';
import { browseTo } from '../dictionary/History';

let AddMoneyView = ({ dispatch, balance, currency }) => {
    const [showSelector, setShowSelectorFor] = useState(null);
    const [amount, setAmount] = useState(0);
    const [account, setAccount] = useState(currency);
    const currentBalance = (balance[account] || 0)

    const addMoneyAndGoBack = () => {
        const transaction = {
            sign: '+',
            amount,
            currency: account,
            icon: 'topup',
            description: 'Added to balance',
            date: 'Today',
            info: 'Visa 1234'
        }
        dispatch(addMoney(account, amount))
        dispatch(logTransaction(transaction))
        dispatch(setActiveCurrencyTo(account))

        browseTo('/accounts')
    }
    const onChangeCurrency = () => setShowSelectorFor({ selected: account })

    const onSelectCurrency = selection => {
        if (selection) {
            setAccount(selection)
        }
        setShowSelectorFor(null)
    }

    return (
        <div className='r-view'>
            <PageHeader label='Add money' onClose={() => browseTo('/accounts')} />
            <div className='r-add-top-wrapper'>
                <div className='r-exchange-from-container'>
                    <CurrencyInputBox
                        balance={currentBalance}
                        currency={account}
                        sign='+'
                        value={amount}
                        onChange={amount => setAmount(amount)}
                        onChangeCurrency={onChangeCurrency}
                    />
                </div>
            </div>
            <div className='r-add-bottom-wrapper'>
                <div className='r-add-button-container'>
                    <ActionButton disabled={!(Math.abs(amount) > 0)} label='Add money' onClick={addMoneyAndGoBack} />
                </div>
            </div>
            <Footerbar />
            {showSelector && <CurrencySelector selected={showSelector.selected} onSelectCurrency={onSelectCurrency} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.add
    const balance = state.balance
    return { balance, currency }
}

AddMoneyView = connect(mapStateToProps)(AddMoneyView)

export { AddMoneyView };

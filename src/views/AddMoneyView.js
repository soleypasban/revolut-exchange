import React, { useState } from 'react';
import { connect } from 'react-redux';
import { browseTo } from '../dictionary/History';
import { AddMoneyWidget } from '../widgets/AddMoneyWidget';
import { addMoneyToAccount } from '../helpers/addMoneyToAccount';
import { setCompleteMessageTo } from '../actions/settings';

let AddMoneyView = ({ dispatch, balance, currency }) => {
    const [showSelector, setShowSelectorFor] = useState(null);
    const [amount, setAmount] = useState(0);
    const [account, setAccount] = useState(currency);
    const currentBalance = (balance[account] || 0)

    const addMoneyAndGoBack = () => {
        const { transaction } = addMoneyToAccount(dispatch, account, amount)
        dispatch(setCompleteMessageTo({
            icon: 'succeed',
            description: `You added ${transaction.value}`
        }))
        browseTo('/complete')
    }

    const onChangeCurrency = () => {
        setShowSelectorFor({ selected: account })
    }

    const onSelectCurrency = selection => {
        selection && setAccount(selection)
        setShowSelectorFor(null)
    }

    const props = {
        currentBalance,
        account,
        amount,
        setAmount,
        onChangeCurrency,
        addMoneyAndGoBack,
        showSelector,
        onSelectCurrency
    }

    return <AddMoneyWidget {...props} />
}

const mapStateToProps = (state) => {
    const currency = state.settings.currencies.add
    const balance = state.balance
    return { balance, currency }
}

AddMoneyView = connect(mapStateToProps)(AddMoneyView)

export { AddMoneyView };

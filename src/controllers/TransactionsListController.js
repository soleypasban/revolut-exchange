import React from 'react';
import { connect } from 'react-redux';
import { Transaction } from '../components/Accounts';
import { EmptyContent } from '../components/EmptyContent';

let TransactionsListController = ({ transactionsList }) =>
    <div className='r-accounts-transactions'>
        {transactionsList.map((transaction, key) =>
            <Transaction {...{ ...transaction, key }} />
        )}
        {
            (transactionsList.length === 0) && <EmptyContent />
        }
    </div>


const mapStateToProps = (state) => {
    const currency = state.settings.currencies.accounts
    const transactionsList = state.transactions[currency] || []
    return { transactionsList }
}

TransactionsListController = connect(mapStateToProps)(TransactionsListController)

export { TransactionsListController }
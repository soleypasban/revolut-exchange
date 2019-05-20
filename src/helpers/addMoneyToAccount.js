import { addMoney } from '../actions/balance'
import { logTransaction } from '../actions/transactions'
import { setActiveCurrencyTo } from '../actions/settings';

export const addMoneyToAccount = (dispatch, account, amount) => {
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
}
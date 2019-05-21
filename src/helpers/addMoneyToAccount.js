import { addMoney } from '../actions/balance'
import { logTransaction } from '../actions/transactions'
import { setActiveCurrencyTo } from '../actions/settings';
import { CurrencySign } from '../dictionary/Currencies';
import { getFormattedNumber } from './numbers';

export const addMoneyToAccount = (dispatch, account, amount) => {
    const amountToAdd = getFormattedNumber(amount)
    const transaction = {
        sign: '+',
        amount: amountToAdd,
        currency: account,
        icon: 'topup',
        description: 'Added to balance',
        date: 'Today',
        value: `${CurrencySign[account]}${amountToAdd}`,
        info: 'Visa 1234'
    }
    
    dispatch(addMoney(account, amount))
    dispatch(logTransaction(transaction))
    dispatch(setActiveCurrencyTo(account))

    return { transaction }
}
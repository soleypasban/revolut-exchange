import { logTransaction } from '../actions/transactions'
import { CurrencySign } from '../dictionary/Currencies'
import { removeMoney, addMoney } from '../actions/balance';

export const convertCurrencies = (dispatch, amounts, convert) => {
    const from = Math.abs(amounts.from).toFixed(2)
    const to = Math.abs(amounts.to).toFixed(2)

    const transactionFrom = {
        sign: '-',
        amount: from,
        currency: convert.from,
        icon: 'transaction',
        description: `Exchanged to ${convert.to}`,
        date: 'Today',
        info: `+${CurrencySign[convert.to]}${to}`
    }

    const transactionTo = {
        sign: '+',
        amount: to,
        currency: convert.to,
        icon: 'transaction',
        description: `Exchanged from ${convert.from}`,
        date: 'Today',
        info: `-${CurrencySign[convert.from]}${from}`
    }

    dispatch(logTransaction(transactionFrom))
    dispatch(logTransaction(transactionTo))

    dispatch(removeMoney(convert.from, from))
    dispatch(addMoney(convert.to, to))

}


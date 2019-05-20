import { logTransaction } from '../actions/transactions'
import { CurrencySign } from '../dictionary/Currencies'
import { removeMoney, addMoney } from '../actions/balance';

export const convertCurrencies = (dispatch, amounts, convert) => {
    const { tFrom, tTo } = getTransactions(amounts, convert)

    dispatch(logTransaction(tFrom))
    dispatch(logTransaction(tTo))

    dispatch(removeMoney(tFrom.currency, tFrom.amount))
    dispatch(addMoney(tTo.currency, tTo.amount))
}

export const getTransactions = (amounts, convert) => {
    const from = Math.abs(amounts.from).toFixed(2)
    const to = Math.abs(amounts.to).toFixed(2)

    const tFrom = {
        sign: '-',
        amount: from,
        currency: convert.from,
        icon: 'transaction',
        description: `Exchanged to ${convert.to}`,
        date: 'Today',
        info: `+${CurrencySign[convert.to]}${to}`
    }

    const tTo = {
        sign: '+',
        amount: to,
        currency: convert.to,
        icon: 'transaction',
        description: `Exchanged from ${convert.from}`,
        date: 'Today',
        info: `-${CurrencySign[convert.from]}${from}`
    }

    return { tFrom, tTo }
}


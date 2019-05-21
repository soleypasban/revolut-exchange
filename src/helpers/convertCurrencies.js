import { logTransaction } from '../actions/transactions'
import { CurrencySign } from '../dictionary/Currencies'
import { removeMoney, addMoney } from '../actions/balance';
import { getFormattedNumber } from './numbers';

export const convertCurrencies = (dispatch, amounts, convert) => {
    const { tFrom, tTo } = getTransactions(amounts, convert)

    dispatch(logTransaction(tFrom))
    dispatch(logTransaction(tTo))

    dispatch(removeMoney(tFrom.currency, tFrom.amount))
    dispatch(addMoney(tTo.currency, tTo.amount))

    return { tFrom, tTo }
}

export const getTransactions = (amounts, convert) => {
    const from = getFormattedNumber(amounts.from)
    const to = getFormattedNumber(amounts.to)

    const tFrom = {
        sign: '-',
        amount: from,
        currency: convert.from,
        icon: 'transaction',
        description: `Exchanged to ${convert.to}`,
        date: 'Today',
        value: `${CurrencySign[convert.to]}${to}`,
        info: `+${CurrencySign[convert.to]}${to}`
    }

    const tTo = {
        sign: '+',
        amount: to,
        currency: convert.to,
        icon: 'transaction',
        description: `Exchanged from ${convert.from}`,
        date: 'Today',
        value: `${CurrencySign[convert.from]}${from}`,
        info: `-${CurrencySign[convert.from]}${from}`
    }

    return { tFrom, tTo }
}


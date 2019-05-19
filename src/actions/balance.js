export const ADD_MONEY = 'ADD_MONEY'
export const REMOVE_MONEY = 'REMOVE_MONEY'

export const addMoney = (currency, amount) => ({
    type: ADD_MONEY,
    payload: { currency, amount }
})

export const removeMoney = (currency, amount) => ({
    type: REMOVE_MONEY,
    payload: { currency, amount }
})

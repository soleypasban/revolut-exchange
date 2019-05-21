export const ACTIVE_CURRENCY = 'ACTIVE_CURRENCY'
export const ACTIVE_EXHCANGES = 'ACTIVE_EXHCANGES'
export const ACTIVE_ADD_CURRENCY = 'ACTIVE_ADD_CURRENCY'
export const UPDATE_RATES = 'UPDATE_RATES'

export const SET_COMPLETE_MESSAGE = 'SET_COMPLETE_MESSAGE'

export const setActiveCurrencyTo = currency => ({
    type: ACTIVE_CURRENCY,
    payload: currency
})

export const setActiveExchangeTo = (from, to) => ({
    type: ACTIVE_EXHCANGES,
    payload: { from, to }
})

export const setAddMoneyCurrencyTo = currency => ({
    type: ACTIVE_ADD_CURRENCY,
    payload: currency
})

export const updateExchangeRates = rates => ({
    type: UPDATE_RATES,
    payload: rates
})

export const setCompleteMessageTo = payload => ({
    type: SET_COMPLETE_MESSAGE,
    payload
})


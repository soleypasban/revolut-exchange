import { ACTIVE_CURRENCY, ACTIVE_EXHCANGES, ACTIVE_ADD_CURRENCY, UPDATE_RATES, SET_COMPLETE_MESSAGE } from "../actions/settings";

const initialState = {
    currencies: {
        accounts: 'EUR',
        exchange: { from: 'EUR', to: 'USD' },
        add: 'EUR'
    },
    exchangeRate: null,
    rates: null,
    complete: null
}

export const settings = (state = initialState, action) => {
    const { payload } = action

    switch (action.type) {
        case ACTIVE_CURRENCY: {
            const currencies = state.currencies
            return { ...state, currencies: { ...currencies, accounts: payload } }
        }

        case ACTIVE_EXHCANGES: {
            const currencies = state.currencies
            return { ...state, currencies: { ...currencies, exchange: payload } }
        }

        case ACTIVE_ADD_CURRENCY: {
            const currencies = state.currencies
            return { ...state, currencies: { ...currencies, add: payload } }
        }

        case UPDATE_RATES:
            return { ...state, rates: { ...payload, EUR: 1 } }

        case SET_COMPLETE_MESSAGE: {
            return { ...state, complete: payload }
        }

        default:
            return state;
    }
}
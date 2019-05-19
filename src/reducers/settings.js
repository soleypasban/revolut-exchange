import { ACTIVE_CURRENCY, ACTIVE_EXHCANGES, ACTIVE_ADD_CURRENCY } from "../actions/settings";

const initialState = {
    currencies: {
        accounts: 'EUR',
        exchange: { from: 'EUR', to: 'EUR' },
        add: 'EUR'
    }
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

        default:
            return state;
    }
}
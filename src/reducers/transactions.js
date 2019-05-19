import { LOG_TRANSACTION } from "../actions/transactions";

const initialState = {}

export const transactions = (state = initialState, action) => {
    const { payload } = action

    switch (action.type) {
        case LOG_TRANSACTION: {
            const { currency } = payload
            const list = state[currency] || []
            list.unshift(payload)
            return { ...state, [currency]: list }
        }

        default:
            return state;
    }
}
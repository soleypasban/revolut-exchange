import { LOG_TRANSACTION } from "../actions/transactions";

const sample = {
    amount: "12",
    currency: "EUR",
    date: "Today",
    description: "Added to balance",
    icon: "topup",
    info: "VISA 1234",
    sign: "+"
}

const initialState = {
    // EUR: [sample, sample, sample, sample, sample, sample, sample, sample ]
    EUR: []
}

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
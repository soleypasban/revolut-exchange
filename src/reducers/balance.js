import { ADD_MONEY, REMOVE_MONEY } from "../actions/balance";

const initialState = {
    USD: 11.11,
    EUR: 12.12
}

export const balance = (state = initialState, action) => {
    const { payload } = action

    switch (action.type) {
        case ADD_MONEY: {
            const newAmount = state[payload.currency] + payload.amount
            return { ...state, [payload.currency]: newAmount }
        }

        case REMOVE_MONEY: {
            const newAmount = state[payload.currency] - payload.amount
            return { ...state, [payload.currency]: newAmount }
        }

        default:
            return state;
    }
}
import { ADD_MONEY, REMOVE_MONEY } from "../actions/balance";

const initialState = {}

export const balance = (state = initialState, action) => {
    const { payload } = action
    const getValue = value => Math.abs((Number(value || 0)).toFixed(2))

    switch (action.type) {
        case ADD_MONEY: {
            const newAmount = Number(state[payload.currency] || 0) + getValue(payload.amount)
            return { ...state, [payload.currency]: newAmount }
        }

        case REMOVE_MONEY: {
            const newAmount = Number(state[payload.currency] || 0) - getValue(payload.amount)
            return { ...state, [payload.currency]: newAmount }
        }

        default:
            return state;
    }
}
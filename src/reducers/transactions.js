import { LOG_TRANSACTION } from "../actions/transactions";

const initialState = []

export const transactions = (state = initialState, action) => {
    const { payload } = action

    switch (action.type) {
        case LOG_TRANSACTION: {
            return [payload, ...state]
        }

        default:
            return state;
    }
}
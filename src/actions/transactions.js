export const LOG_TRANSACTION = 'LOG_TRANSACTION'

export const logTransaction = ({ sign, amount, currency, icon, description, date, info }) => ({
    type: LOG_TRANSACTION,
    payload: { sign, amount, currency, icon, description, date, info }
})
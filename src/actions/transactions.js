export const LOG_TRANSACTION = 'LOG_TRANSACTION'

export const logTransaction = (sign, amount, currency, icon, reason, date) => ({
    type: LOG_TRANSACTION,
    payload: { sign, amount, currency, icon, reason, date }
})
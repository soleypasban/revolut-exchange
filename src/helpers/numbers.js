export const separateNumberParts = amount => {
    const int = Math.trunc(amount)
    const decimals = (amount - Math.floor(amount)).toFixed(2).substring(1);
    const parts = { int, decimals }
    return parts
}

export const getFormattedNumber = value => {
    if (Number(value || 0) === 0) return ''
    const num = (0 + value).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    const ret = Number(Math.abs(num).toFixed(2))
    return ret
}
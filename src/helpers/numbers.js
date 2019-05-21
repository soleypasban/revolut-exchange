export const separateNumberParts = amount => {
    const int = Math.trunc(amount)
    const decimals = (amount - Math.floor(amount)).toFixed(2).substring(1);
    const parts = { int, decimals }
    return parts
}

export const getValue = value => {
    const num = value.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    return Number(num).toFixed(2)
}
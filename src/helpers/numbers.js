export const separateNumberParts = amount => {
    const int = Math.trunc(amount)
    const decimals = (amount - Math.floor(amount)).toFixed(2).substring(1);
    const parts = { int, decimals }
    return parts
}

export const getValue = value => Math.abs((Number(value || 0)).toFixed(2))
export const separateNumberParts = amount => {
    const int = Math.trunc(amount)
    const decimals = (amount - Math.floor(amount)).toFixed(2).substring(1);
    const parts = { int, decimals }
    return parts
}

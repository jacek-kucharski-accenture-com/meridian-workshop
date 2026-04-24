// Exchange rates relative to USD — sourced from xe.com on 2026-04-24
export const EXCHANGE_RATES = {
  USD: 1.0,
  EUR: 0.855057,
  JPY: 159.72,
  PLN: 3.62961
}

export function convertFromUSD(amount, targetCurrency) {
  return (amount || 0) * (EXCHANGE_RATES[targetCurrency] || 1)
}

export function formatCurrency(amount, currency = 'USD', numberLocale = 'en-US') {
  const converted = convertFromUSD(amount, currency)
  return new Intl.NumberFormat(numberLocale, {
    style: 'currency',
    currency
  }).format(converted)
}

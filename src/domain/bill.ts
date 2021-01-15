export enum CurrencyEnum {
  UAH = 'UAH',
  USD = 'USD',
  EUR = 'EUR',
}

export interface Bill {
  value: number
  currency: CurrencyEnum
}

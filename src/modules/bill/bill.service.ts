import { Injectable } from '@nestjs/common'
import { Bill, CurrencyEnum } from '../../domain/bill'

@Injectable()
export class BillService {
  // fixme: temporary
  private _bill: Bill = {
    value: 10000,
    currency: CurrencyEnum.UAH,
  }

  getBill(): Bill {
    return { ...this._bill }
  }

  updateBill(bill: Bill) {
    this._bill.value = bill.value
    this._bill.currency = bill.currency
    return this.getBill()
  }
}

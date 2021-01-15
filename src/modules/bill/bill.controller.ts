import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'

import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { Bill } from '../../domain/bill'
import { BillService } from './bill.service'

@UseGuards(JwtAuthGuard)
@Controller('bill')
export class BillController {
  constructor(private billService: BillService) {}

  @Get('')
  async getBill(): Promise<Bill> {
    return this.billService.getBill()
  }

  @Post('')
  async updateBill(@Body() bill: Bill): Promise<Bill> {
    return this.billService.updateBill(bill)
  }
}

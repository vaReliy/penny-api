import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AuthModule } from './core/auth/auth.module'
import { BillModule } from './modules/bill/bill.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [AuthModule, UsersModule, BillModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

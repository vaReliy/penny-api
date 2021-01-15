import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AuthModule } from './core/auth/auth.module'
import { BillModule } from './modules/bill/bill.module'
import { CategoriesModule } from './modules/categories/categories.module'
import { UserActionsModule } from './modules/user-actions/user-actions.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    AuthModule,
    UsersModule,
    BillModule,
    CategoriesModule,
    UserActionsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

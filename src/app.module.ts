import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AuthModule } from './core/auth/auth.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

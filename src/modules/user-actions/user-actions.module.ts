import { Module } from '@nestjs/common'

import { UserActionsController } from './user-actions.controller'
import { UserActionsService } from './user-actions.service'

@Module({
  providers: [UserActionsService],
  controllers: [UserActionsController],
})
export class UserActionsModule {}

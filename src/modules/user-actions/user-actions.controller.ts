import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { UserAction } from '../../domain/user-action'
import { UserActionsService } from './user-actions.service'

@UseGuards(JwtAuthGuard)
@Controller('user-actions')
export class UserActionsController {
  constructor(private userActionsService: UserActionsService) {}

  @Get()
  async getAll(): Promise<UserAction[]> {
    return this.userActionsService.findAll()
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<UserAction | null> {
    return this.userActionsService.findOne(id)
  }

  @Post()
  async create(@Body() action: UserAction): Promise<boolean> {
    return this.userActionsService.add(action)
  }
}

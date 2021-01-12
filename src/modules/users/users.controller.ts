import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common'

import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { UserRequest, UserResponse } from '../../domain/user.model'
import { UsersService } from './users.service'

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  async getAll(@Query('email') email: string): Promise<UserResponse[]> {
    return email
      ? this.usersService.findByEmail(email)
      : this.usersService.findAll()
  }

  @Post()
  async create(@Body() user: UserRequest): Promise<UserResponse> {
    return this.usersService.create(user)
  }
}

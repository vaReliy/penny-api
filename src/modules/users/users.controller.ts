import { Body, Controller, Get, Post, Query } from '@nestjs/common'

import { UserRequest, UserResponse } from '../../domain/user.model'
import { UsersService } from './users.service'

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

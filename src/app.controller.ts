import { Controller, Get, Request, UseGuards } from '@nestjs/common'

import { JwtAuthGuard } from './core/auth/guards/jwt-auth.guard'
import { UserDto } from './domain/user.model'

@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<UserDto> {
    console.log('<-- GET [profile] |', req.user)
    return req.user
  }
}

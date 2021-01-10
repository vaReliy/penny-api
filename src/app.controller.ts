import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'

import { AuthService } from './core/auth/auth.service'
import { JwtAuthGuard } from './core/auth/jwt-auth.guard'
import { LocalAuthGuard } from './core/auth/local-auth.guard'
import { AccessToken } from './domain/access-token'
import { UserDto } from './domain/user.model'

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<AccessToken> {
    console.log('<-- POST [auth/login] |', req.user)
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<UserDto> {
    console.log('<-- GET [profile] |', req.user)
    return req.user
  }
}

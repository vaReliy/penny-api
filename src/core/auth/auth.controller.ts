import { Controller, Post, Request, UseGuards } from '@nestjs/common'
import { AccessToken } from '../../domain/access-token'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth.guard'

@UseGuards(LocalAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req): Promise<AccessToken> {
    console.log('<-- POST [auth/login] |', req.user)
    return this.authService.login(req.user)
  }
}

import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { AccessToken, AccessTokenPayload } from '../../domain/access-token'
import { UserDto } from '../../domain/user.model'
import { UsersService } from '../../modules/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<UserDto> {
    const user = await this.usersService.findOne(username)
    if (user?.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: UserDto): Promise<AccessToken> {
    const payload: AccessTokenPayload = {
      username: user.email,
      sub: user.id,
    }
    return {
      access_token: `Bearer ${this.jwtService.sign(payload)}`,
    }
  }
}

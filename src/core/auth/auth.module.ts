import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { KEYS } from '../../config/keys'
import { UsersModule } from '../users/users.module'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { LocalStrategy } from './local.strategy'

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: KEYS.JWT_SECRET,
      signOptions: { expiresIn: KEYS.JWT_EXPIRES_IN },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}

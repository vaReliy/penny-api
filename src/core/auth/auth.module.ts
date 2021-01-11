import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { KEYS } from '../../config/keys'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { LocalStrategy } from './strategies/local.strategy'

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
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

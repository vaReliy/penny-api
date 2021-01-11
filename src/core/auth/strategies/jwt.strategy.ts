import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'
import { KEYS } from '../../../config/keys'
import { AccessTokenPayload } from '../../../domain/access-token'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: KEYS.JWT_SECRET,
    })
  }

  async validate(payload: AccessTokenPayload) {
    return { userId: payload.sub, username: payload.username }
  }
}

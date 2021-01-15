import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { KEYS } from './config/keys'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  if (process.env.NODE_ENV === 'development') {
    app.enableCors()
  }
  await app.listen(KEYS.SERVER_PORT)
}
bootstrap().then()

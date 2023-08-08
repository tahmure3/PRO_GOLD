import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'debug'],
  });
  const port = process.env.SERVER_PORT || 3001;
  await app.listen(port);
  log(`http://127.0.0.1:${port}`, process.env.NODE_ENV);
}
bootstrap();

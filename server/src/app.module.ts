import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ViewerModule } from './viewer/viewer.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/config/env/.${
        process.env.NODE_ENV
      }.env`,
      isGlobal: true,
    }),
    DatabaseModule,
    ViewerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    process.env.NODE_ENV !== 'prod' &&
      consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

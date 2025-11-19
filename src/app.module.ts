import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentValidator } from './config/environment.validator';
import { DatabaseModule } from './module/database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './module/auth/guard/auth.guard';
import jwtConfig from './config/jwt.config';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [jwtConfig],
      envFilePath: '.env',
      validationSchema: environmentValidator,
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

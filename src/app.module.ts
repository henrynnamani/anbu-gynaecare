import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentValidator } from './config/environment.validator';
import { DatabaseModule } from './module/database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './module/auth/guard/auth.guard';
import jwtConfig from './config/jwt.config';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { UserCyclesModule } from './module/user_cycles/user_cycles.module';
import { CyclePredictionsModule } from './module/cycle_predictions/cycle_predictions.module';
import { CycleLogsModule } from './module/cycle_logs/cycle_logs.module';
import { ProductModule } from './module/product/product.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { CronService } from './shared/cron.service';
import { AppController } from './app.controller';
import { DbPingService } from './shared/dbping.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [jwtConfig],
      envFilePath: '.env',
      validationSchema: environmentValidator,
    }),
    ScheduleModule.forRoot(),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 3,
    }),
    DatabaseModule,
    UsersModule,
    UserCyclesModule,
    CyclePredictionsModule,
    CycleLogsModule,
    AuthModule,
    ProductModule 
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    CronService,
    DbPingService
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentValidator } from './config/environment.validator';
import { DatabaseModule } from './module/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [],
      envFilePath: '.env',
      validationSchema: environmentValidator,
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

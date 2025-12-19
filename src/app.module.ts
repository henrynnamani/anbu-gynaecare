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
import { CartItemsModule } from './module/cart_items/cart_items.module';
import { CartsModule } from './module/carts/carts.module';

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
    UserCyclesModule,
    CyclePredictionsModule,
    CycleLogsModule,
    AuthModule,
    ProductModule,
    CartsModule,
    CartItemsModule,
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

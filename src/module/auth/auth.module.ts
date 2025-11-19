import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './provider/auth.service';
import { UsersModule } from '../users/users.module';
import { TokenService } from '@/shared/token.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get('jwt.secret'),
        signOptions: {
          expiresIn: configService.get('jwt.expires.access'),
        },
      }),
    }),
    UsersModule,
  ],
  providers: [JwtStrategy, AuthService, TokenService],
  controllers: [AuthController],
})
export class AuthModule {}

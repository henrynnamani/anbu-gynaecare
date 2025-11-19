import { Body, Controller, Post } from '@nestjs/common';
import { SkipAuth } from './decorator/skipAuth.decorator';
import { AuthService } from './provider/auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@SkipAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerData: RegisterDto) {
    return this.authService.registerUser(registerData);
  }

  @Post('login')
  login(@Body() loginData: LoginDto) {
    return this.authService.loginUser(loginData);
  }
}

import { UsersService } from '@/module/users/provider/users.service';
import { IUser } from '@/shared/types/auth';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import * as SYS_MSG from '@/shared/system-message';
import * as bcrypt from 'bcryptjs';
import { TokenService } from '@/shared/token.service';
import { TokenType } from '@/shared/enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(data: IUser) {
    try {
      const record = await this.usersService.findUserByEmail(data.email);
      const salt = await bcrypt.genSalt(10);

      if (record) {
        throw new BadRequestException(SYS_MSG.ENTITY_ALREADY_EXIST);
      }

      const hashedPassword = await bcrypt.hash(data.password, salt);

      const user = await this.usersService.createUser({
        ...data,
        password: hashedPassword,
      });

      const payload = {
        sub: user.id,
        email: user.email,
      };

      const accessToken = await this.tokenService.generateToken(
        payload,
        TokenType.ACCESS,
      );

      return {
        message: SYS_MSG.USER_CREATED_SUCCESSFULLY,
        data: {
          user,
          accessToken,
        },
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async loginUser(data: Pick<IUser, 'email' | 'password'>) {
    try {
      const record = await this.usersService.findUserByEmail(data.email);

      if (!record) {
        throw new NotFoundException(SYS_MSG.ENTITY_NOT_FOUND);
      }

      const isValidPassword = await bcrypt.compare(
        data.password,
        record.password,
      );

      if (!isValidPassword) {
        throw new BadRequestException(SYS_MSG.INVALID_CREDENTIAL);
      }

      const payload = {
        sub: record.id,
        email: record.email,
      };

      const accessToken = await this.tokenService.generateToken(
        payload,
        TokenType.ACCESS,
      );

      return {
        message: SYS_MSG.USER_SUCCESSFULLY_LOGGEDIN,
        data: {
          user: record,
          accessToken,
        },
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }
}

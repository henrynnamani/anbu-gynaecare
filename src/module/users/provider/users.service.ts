import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';
import { IUser } from '@/shared/types/auth';
import { ModelAction } from '@/shared/action.model';

@Injectable()
export class UsersService {
  private modelAction: ModelAction<User>;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    this.modelAction = new ModelAction(userRepository);
  }

  async createUser(user: IUser) {
    try {
      const record = await this.modelAction.create(user);

      record.password = '';

      return record;
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async findUserByEmail(email: string) {
    try {
      return this.modelAction.findBy({ email });
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }
}

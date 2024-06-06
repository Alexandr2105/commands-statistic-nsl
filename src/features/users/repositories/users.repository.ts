import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from 'src/common/const/providers';
import { Users } from 'src/tables/users';

@Injectable()
export class UsersRepository {
  constructor(
    @Inject(providersConst.usersRepository)
    private readonly usersModel: typeof Users,
  ) {}

  async createUser(newUser: Users) {
    return newUser.save();
  }
}

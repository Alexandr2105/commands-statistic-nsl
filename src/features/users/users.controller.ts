import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './application/useCases/create.user.use-case';
import { CreateUserDto } from './dto/create.user.dto';
import { Users } from '../../tables/users';
import { SwaggerDecoratorByCreateUsers } from '../../common/swagger-decorators/swagger.users.decarator';

@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus) {}

  @SwaggerDecoratorByCreateUsers()
  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<Users> {
    return this.commandBus.execute(new CreateUserCommand(body));
  }
}

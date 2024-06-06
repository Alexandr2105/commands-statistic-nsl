import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './application/useCases/create.user.use-case';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(body));
  }
}

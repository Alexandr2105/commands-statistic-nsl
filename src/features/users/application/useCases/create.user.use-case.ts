import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserDto } from '../../dto/create.user.dto';
import { UsersRepository } from '../../repositories/users.repository';
import { Users } from 'src/tables/users';

export class CreateUserCommand {
  constructor(public readonly body: CreateUserDto) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserUseCase implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(command: CreateUserCommand): Promise<Users> {
    const newUser = Users.build({
      userName: command.body.userName,
      email: command.body.email,
      password: command.body.password,
      teamId: command.body.teamId,
    });
    return this.usersRepository.createUser(newUser);
  }
}

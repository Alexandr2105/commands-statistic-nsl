import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { SharedModule } from 'src/common/modules/shared.module';
import { CreateUserUseCase } from './application/useCases/create.user.use-case';

@Module({
  imports: [SharedModule],
  controllers: [UsersController],
  providers: [UsersRepository, CreateUserUseCase],
  exports: [],
})
export class UsersModule {}

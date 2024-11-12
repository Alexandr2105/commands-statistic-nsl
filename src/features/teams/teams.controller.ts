import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamDto } from './dto/create.team.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTeamCommand } from './application/useCases/create.team.use-case';
import { Teams } from '../../tables/teams';
import { SwaggerDecoratorByCreateTeams } from '../../common/swagger-decorators/swagger.teams.decarator';

@Controller('teams')
export class TeamsController {
  constructor(private readonly commandBus: CommandBus) {}

  @SwaggerDecoratorByCreateTeams()
  @Post()
  async createTeam(@Body() body: CreateTeamDto): Promise<Teams> {
    return this.commandBus.execute(new CreateTeamCommand(body));
  }
}

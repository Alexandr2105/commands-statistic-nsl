import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Leagues } from 'src/tables/leagues';
import { CreateLegueDto } from '../../../dto/create.league.dto';
import { LeaguesRepository } from '../../../reposirories/leagues.repository';

export class CreateLeagueCommand {
  constructor(public readonly body: CreateLegueDto) {}
}

@CommandHandler(CreateLeagueCommand)
export class CreateLeagueUseCase
  implements ICommandHandler<CreateLeagueCommand>
{
  constructor(private readonly leaguesRepository: LeaguesRepository) {}

  async execute(command: CreateLeagueCommand): Promise<any> {
    const newLeague = Leagues.build({
      description: command.body.description,
      title: command.body.title,
    });
    return this.leaguesRepository.createSeason(newLeague);
  }
}

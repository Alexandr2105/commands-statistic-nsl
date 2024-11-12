import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Leagues } from 'src/tables/leagues';
import { LeaguesRepository } from '../../../reposirories/leagues.repository';
import { CreateLeagueDto } from '../../../dto/create.league.dto';

export class CreateLeagueCommand {
  constructor(public readonly body: CreateLeagueDto) {}
}

@CommandHandler(CreateLeagueCommand)
export class CreateLeagueUseCase
  implements ICommandHandler<CreateLeagueCommand>
{
  constructor(private readonly leaguesRepository: LeaguesRepository) {}

  async execute(command: CreateLeagueCommand): Promise<Leagues> {
    const newLeague = Leagues.build({
      description: command.body.description,
      title: command.body.title,
    });
    return this.leaguesRepository.createSeason(newLeague);
  }
}

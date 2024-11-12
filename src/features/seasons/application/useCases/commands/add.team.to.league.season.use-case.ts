import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RelTeamsLeagues } from '../../../../../tables/rel.teams.leagues';
import { RelTeamsLeaguesRepository } from '../../../../rel.teams.leagues/reposirories/rel.teams.leagues.repository';

export class AddTeamToLeagueSeasonCommand {
  constructor(
    public readonly leagueId: string,
    public readonly teamId: string,
  ) {}
}

@CommandHandler(AddTeamToLeagueSeasonCommand)
export class AddTeamToLeagueSeasonUseCase
  implements ICommandHandler<AddTeamToLeagueSeasonCommand>
{
  constructor(
    private readonly relTeamsRelLeaguesSeasonsRepository: RelTeamsLeaguesRepository,
  ) {}

  execute(command: AddTeamToLeagueSeasonCommand): Promise<RelTeamsLeagues> {
    const relTeamsRelSeasonLeagues = RelTeamsLeagues.build({
      teamId: command.teamId,
      leagueId: command.leagueId,
    });

    return this.relTeamsRelLeaguesSeasonsRepository.addTeamToLeagueSeason(
      relTeamsRelSeasonLeagues,
    );
  }
}

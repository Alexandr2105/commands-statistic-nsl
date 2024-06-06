import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RelTeamsRelLeaguesSeasons } from '../../../../../tables/relTeamsRelLeaguesSeasons';
import { RelTeamsRelLeaguesSeasonsRepository } from '../../../../rel.teams.rel.leagues.seasons/reposirories/rel.teams.rel.leagues.seasons.repository';

export class AddTeamToLeagueSeasonCommand {
  constructor(
    public readonly leagueSeasonId: number,
    public readonly teamId: number,
  ) {}
}

@CommandHandler(AddTeamToLeagueSeasonCommand)
export class AddTeamToLeagueSeasonUseCase
  implements ICommandHandler<AddTeamToLeagueSeasonCommand>
{
  constructor(
    private readonly relTeamsRelLeaguesSeasonsRepository: RelTeamsRelLeaguesSeasonsRepository,
  ) {}

  execute(command: AddTeamToLeagueSeasonCommand): Promise<any> {
    const relTeamsRelSeasonLeagues = RelTeamsRelLeaguesSeasons.build({
      teamId: command.teamId,
      relLeaguesSeasonsId: command.leagueSeasonId,
    });

    return this.relTeamsRelLeaguesSeasonsRepository.addTeamToLeagueSeason(
      relTeamsRelSeasonLeagues,
    );
  }
}

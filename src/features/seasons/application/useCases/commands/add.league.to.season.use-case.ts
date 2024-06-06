import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeasonsQueryRepository } from '../../../repositories/seasons.query.repository';
import { SeasonsRepository } from '../../../repositories/seasons.repository';
import { LeaguesQueryRepository } from '../../../../leagues/reposirories/leagues.query.repository';
import { NotFoundException } from '@nestjs/common';

export class AddLeagueToSeasonCommand {
  constructor(
    public seasonId: number,
    public leagueId: number,
  ) {}
}

@CommandHandler(AddLeagueToSeasonCommand)
export class AddLeagueToSeasonUseCase
  implements ICommandHandler<AddLeagueToSeasonCommand>
{
  constructor(
    private readonly seasonsQueryRepository: SeasonsQueryRepository,
    private readonly leaguesQueryRepository: LeaguesQueryRepository,
  ) {}

  async execute(command: AddLeagueToSeasonCommand) {
    const leagues = await this.leaguesQueryRepository.getLeaguesById(
      command.leagueId,
    );
    const season = await this.seasonsQueryRepository.getSeasonById(
      command.seasonId,
    );

    if (leagues && season) {
      return season.$add('league', leagues);
    } else {
      throw new NotFoundException();
    }
  }
}

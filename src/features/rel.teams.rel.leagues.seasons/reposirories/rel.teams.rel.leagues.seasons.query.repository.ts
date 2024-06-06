import { Inject } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { RelTeamsRelLeaguesSeasons } from '../../../tables/relTeamsRelLeaguesSeasons';

export class RelTeamsRelLeaguesSeasonsQueryRepository {
  constructor(
    @Inject(providersConst.relTeamRelLeaguesSeasonsRepository)
    private readonly relTeamsRelLeaguesSeasons: typeof RelTeamsRelLeaguesSeasons,
  ) {}

  async getRelTeamsRelLeagueSeasonById(relTeamsRelLeagueSeasonId: number) {
    return await this.relTeamsRelLeaguesSeasons.findAll({
      where: { id: relTeamsRelLeagueSeasonId },
    });
  }
}

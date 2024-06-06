import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { RelLeaguesSeasons } from '../../../tables/rel.leagues.seasons';

@Injectable()
export class RelLeaguesSeasonsQueryRepository {
  constructor(
    @Inject(providersConst.relLeaguesSeasonsRepository)
    private readonly relLeaguesSeasons: typeof RelLeaguesSeasons,
  ) {}

  async getRelLeaguesSeasons(leagueSeasonId: number) {
    return this.relLeaguesSeasons.findOne({ where: { id: leagueSeasonId } });
  }
}

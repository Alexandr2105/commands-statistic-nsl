import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { RelLeaguesSeasons } from '../../../tables/rel.leagues.seasons';

@Injectable()
export class RelLeaguesSeasonsRepository {
  constructor(
    @Inject(providersConst.relLeaguesSeasonsRepository)
    private readonly relLeaguesSeasonsModel: typeof RelLeaguesSeasons,
  ) {}
}

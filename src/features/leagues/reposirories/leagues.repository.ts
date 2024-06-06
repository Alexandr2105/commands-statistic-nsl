import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from 'src/common/const/providers';
import { Leagues } from 'src/tables/leagues';

@Injectable()
export class LeaguesRepository {
  constructor(
    @Inject(providersConst.leaguesRepository)
    private readonly leaguesModel: typeof Leagues,
  ) {}

  async createSeason(newLeague: Leagues) {
    return newLeague.save();
  }
}

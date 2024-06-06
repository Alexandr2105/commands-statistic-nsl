import { Inject } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { Leagues } from '../../../tables/leagues';

export class LeaguesQueryRepository {
  constructor(
    @Inject(providersConst.leaguesRepository)
    private readonly leaguesModel: typeof Leagues,
  ) {}

  async getLeaguesById(leaguesId: number) {
    return this.leaguesModel.findOne({ where: { id: leaguesId } });
  }
}

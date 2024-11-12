import { Inject } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { Leagues } from '../../../tables/leagues';
import { Teams } from '../../../tables/teams';
import { Stages } from '../../../tables/stages';
import { Scores } from '../../../tables/scores';

export class LeaguesQueryRepository {
  constructor(
    @Inject(providersConst.leaguesRepository)
    private readonly leaguesModel: typeof Leagues,
  ) {}

  async getLeaguesById(leaguesId: string): Promise<Leagues> {
    return this.leaguesModel.findOne({ where: { id: leaguesId } });
  }

  async getLeaguesByIdWithModels(leaguesId: string): Promise<Leagues> {
    return this.leaguesModel.findOne({
      where: { id: leaguesId },
      include: [
        {
          model: Teams,
          include: [{ model: Scores, include: [Stages] }],
        },
      ],
    });
  }
}

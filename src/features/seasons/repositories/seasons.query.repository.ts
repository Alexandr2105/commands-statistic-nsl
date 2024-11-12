import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { Seasons } from '../../../tables/seasons';
import { Teams } from '../../../tables/teams';
import { Scores } from '../../../tables/scores';
import { Leagues } from '../../../tables/leagues';

@Injectable()
export class SeasonsQueryRepository {
  constructor(
    @Inject(providersConst.seasonsRepository)
    private readonly seasonsModel: typeof Seasons,
  ) {}

  async getSeasonById(seasonId: string): Promise<Seasons> {
    return this.seasonsModel.findOne({
      where: { id: seasonId },
    });
  }

  async getSeasonByIdWithModels(seasonId: string): Promise<Seasons> {
    return this.seasonsModel.findOne({
      where: { id: seasonId },
      include: [
        {
          model: Leagues,
          include: [
            {
              model: Teams,
              include: [Scores],
            },
          ],
        },
      ],
    });
  }
}

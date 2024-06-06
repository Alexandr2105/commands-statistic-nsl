import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { Seasons } from '../../../tables/seasons';

@Injectable()
export class SeasonsQueryRepository {
  constructor(
    @Inject(providersConst.seasonsRepository)
    private readonly seasonsModel: typeof Seasons,
  ) {}

  async getSeasonById(seasonId: number) {
    return this.seasonsModel.findOne({
      where: { id: seasonId },
    });
  }
}

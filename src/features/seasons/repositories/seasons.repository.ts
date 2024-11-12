import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from 'src/common/const/providers';
import { Seasons } from 'src/tables/seasons';

@Injectable()
export class SeasonsRepository {
  constructor(
    @Inject(providersConst.seasonsRepository)
    private readonly teamsModel: typeof Seasons,
  ) {}

  async createSeason(newSeason: Seasons): Promise<Seasons> {
    return newSeason.save();
  }
}

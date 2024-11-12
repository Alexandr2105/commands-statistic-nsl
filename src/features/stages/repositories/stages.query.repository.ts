import { Inject } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { Stages } from '../../../tables/stages';

export class StagesQueryRepository {
  constructor(
    @Inject(providersConst.stagesRepository)
    private readonly stages: typeof Stages,
  ) {}

  async getStageById(stageId: string) {
    return this.stages.findOne({ where: { id: stageId } });
  }

  async getAllStagesByLeagueId(leagueId: string): Promise<Stages[]> {
    return this.stages.findAll({ where: { leagueId: leagueId } });
  }
}

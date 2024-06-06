import { Inject } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { Stages } from '../../../tables/stages';

export class StagesQueryRepository {
  constructor(
    @Inject(providersConst.stagesRepository)
    private readonly stages: typeof Stages,
  ) {}

  async getStageById(stageId: number) {
    return this.stages.findOne({ where: { id: stageId } });
  }

  async getAllStages() {
    return this.stages.findAll({ include: [Stages] });
  }
}

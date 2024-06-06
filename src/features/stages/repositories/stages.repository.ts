import { Stages } from '../../../tables/stages';

export class StagesRepository {
  constructor() {}

  async createStage(stages: Stages) {
    return stages.save();
  }
}

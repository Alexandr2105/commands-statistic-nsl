import { Scores } from '../../../tables/scores';

export class ScoresRepository {
  constructor() {}

  async createNewScore(newScore: Scores): Promise<Scores> {
    return newScore.save();
  }
}

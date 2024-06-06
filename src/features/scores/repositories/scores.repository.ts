import { Scores } from '../../../tables/scores';

export class ScoresRepository {
  constructor() {}

  async createNewScore(newScore: Scores) {
    return newScore.save();
  }
}

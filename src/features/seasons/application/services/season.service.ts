import { SeasonsQueryRepository } from '../../repositories/seasons.query.repository';
import { Injectable } from '@nestjs/common';
import { Seasons } from '../../../../tables/seasons';

@Injectable()
export class SeasonService {
  constructor(
    private readonly seasonsQueryRepository: SeasonsQueryRepository,
  ) {}

  async getSeasonByIdWithModels(seasonId: string): Promise<Seasons> {
    const season =
      await this.seasonsQueryRepository.getSeasonByIdWithModels(seasonId);

    season.leagues.forEach((league) => {
      league.teams.forEach((team) => {
        team.totalScore = team.scores.reduce(
          (total, score) => total + score.score,
          0,
        );
      });
    });
    return season;
  }
}

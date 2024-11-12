import { Injectable } from '@nestjs/common';
import { Leagues } from '../../../../tables/leagues';
import { LeaguesQueryRepository } from '../../reposirories/leagues.query.repository';

@Injectable()
export class LeaguesService {
  constructor(
    private readonly leaguesQueryRepository: LeaguesQueryRepository,
  ) {}

  async getLeaguesByIdWithModels(leagueId: string): Promise<Leagues> {
    const result =
      await this.leaguesQueryRepository.getLeaguesByIdWithModels(leagueId);

    result.teams.forEach((team) => {
      team.totalScore = team.scores.reduce(
        (sum, score) => sum + score.score,
        0,
      );
    });
    return result;
  }
}

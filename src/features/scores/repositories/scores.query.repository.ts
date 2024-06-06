import { Inject } from '@nestjs/common';
import { providersConst } from '../../../common/const/providers';
import { RelTeamsRelLeaguesSeasons } from '../../../tables/relTeamsRelLeaguesSeasons';
import { Teams } from '../../../tables/teams';
import { Scores } from '../../../tables/scores';
import { Stages } from '../../../tables/stages';
import { Sequelize } from 'sequelize-typescript';

export class ScoresQueryRepository {
  constructor(
    @Inject(providersConst.relTeamRelLeaguesSeasonsRepository)
    private readonly relTeamsRelLeaguesSeasons: typeof RelTeamsRelLeaguesSeasons,
  ) {}

  async getAllScores() {
    return this.relTeamsRelLeaguesSeasons.findAll({
      include: [Teams, { model: Scores, include: [Stages] }],
      attributes: {
        include: [
          // [
          //   Sequelize.fn('COUNT', Sequelize.col('Scores.stageId')),
          //   'stagesCount',
          // ],
          // [
          //   Sequelize.fn('SUM', Sequelize.col('Scores.scoreCount')),
          //   'totalCount',
          // ],
        ],
      },
      // group: ['Stages.id'],
    });
  }
}
//TODO: сделать счет, и сделать swagger

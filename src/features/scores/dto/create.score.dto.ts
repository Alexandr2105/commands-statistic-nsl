import { IsNumber, Validate } from 'class-validator';
import { CheckTeamLeagueSeasonId } from '../../../common/custom.validators/check.team.league.season.id';
import { CheckStageId } from '../../../common/custom.validators/check.stage.id';

export class CreateScoreDto {
  @Validate(CheckStageId)
  stageId: number;
  @Validate(CheckTeamLeagueSeasonId)
  relTeamsRelLeagueSeasonId: number;
  @IsNumber()
  score: number;
}

import { Validate } from 'class-validator';
import { CheckTeamId } from '../../../common/custom.validators/check.teamId';
import { CheckLeagueSeasonId } from '../../../common/custom.validators/check.league.season.id';

export class AddTeamToLeagueSeasonDto {
  @Validate(CheckLeagueSeasonId)
  leagueSeasonId: number;
  @Validate(CheckTeamId)
  teamId: number;
}

import { Validate } from 'class-validator';
import { CheckLeagueId } from '../../../common/custom.validators/check.leagueId';

export class LeagueIdDto {
  @Validate(CheckLeagueId)
  leagueId: string;
}

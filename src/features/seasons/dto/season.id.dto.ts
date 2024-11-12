import { Validate } from 'class-validator';
import { CheckSeasonId } from '../../../common/custom.validators/check.seasonId';

export class SeasonIdDto {
  @Validate(CheckSeasonId)
  seasonId: string;
}

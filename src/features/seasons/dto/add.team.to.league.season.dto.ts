import { Validate } from 'class-validator';
import { CheckTeamId } from '../../../common/custom.validators/check.teamId';
import { CheckLeagueSeasonId } from '../../../common/custom.validators/check.league.season.id';
import { ApiProperty } from '@nestjs/swagger';

export class AddTeamToLeagueSeasonDto {
  @ApiProperty({ type: 'string' })
  @Validate(CheckLeagueSeasonId)
  leagueId: string;

  @ApiProperty({ type: 'string' })
  @Validate(CheckTeamId)
  teamId: string;
}

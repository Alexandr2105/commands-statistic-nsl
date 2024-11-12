import { Validate } from 'class-validator';
import { CheckStageId } from '../../../common/custom.validators/check.stage.id';
import { CheckTeamId } from '../../../common/custom.validators/check.teamId';
import { ApiProperty } from '@nestjs/swagger';

export class StageIdTeamIdDto {
  @ApiProperty({ type: 'string' })
  @Validate(CheckStageId)
  stageId: string;

  @ApiProperty({ type: 'string' })
  @Validate(CheckTeamId)
  teamId: string;
}

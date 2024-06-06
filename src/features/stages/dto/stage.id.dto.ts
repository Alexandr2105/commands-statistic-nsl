import { Validate } from 'class-validator';
import { CheckStageId } from '../../../common/custom.validators/check.stage.id';

export class StageIdDto {
  @Validate(CheckStageId)
  stageId: number;
}

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { StagesQueryRepository } from '../../features/stages/repositories/stages.query.repository';

@ValidatorConstraint()
@Injectable()
export class CheckStageId implements ValidatorConstraintInterface {
  constructor(private readonly stagesQueryRepository: StagesQueryRepository) {}

  async validate(stageId: string) {
    const stage = await this.stagesQueryRepository.getStageById(stageId);
    return !!stage;
  }

  defaultMessage(): string {
    return 'Такого этапа не существует';
  }
}

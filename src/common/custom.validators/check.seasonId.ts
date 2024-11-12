import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { SeasonsQueryRepository } from '../../features/seasons/repositories/seasons.query.repository';

@ValidatorConstraint()
@Injectable()
export class CheckSeasonId implements ValidatorConstraintInterface {
  constructor(
    private readonly seasonsQueryRepository: SeasonsQueryRepository,
  ) {}

  async validate(seasonId: string) {
    const season = await this.seasonsQueryRepository.getSeasonById(seasonId);
    return !!season;
  }

  defaultMessage(): string {
    return 'Такого сезона не существует';
  }
}

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { LeaguesQueryRepository } from '../../features/leagues/reposirories/leagues.query.repository';

@ValidatorConstraint()
@Injectable()
export class CheckLeagueSeasonId implements ValidatorConstraintInterface {
  constructor(
    private readonly leaguesQueryRepository: LeaguesQueryRepository,
  ) {}

  async validate(leagueId: string) {
    const team = await this.leaguesQueryRepository.getLeaguesById(leagueId);
    return !!team;
  }

  defaultMessage(): string {
    return 'Такого сезона и лиги не существует';
  }
}

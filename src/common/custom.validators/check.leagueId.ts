import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { LeaguesQueryRepository } from '../../features/leagues/reposirories/leagues.query.repository';

@ValidatorConstraint()
@Injectable()
export class CheckLeagueId implements ValidatorConstraintInterface {
  constructor(
    private readonly leaguesQueryRepository: LeaguesQueryRepository,
  ) {}

  async validate(leagueId: string) {
    const league = await this.leaguesQueryRepository.getLeaguesById(leagueId);
    return !!league;
  }

  defaultMessage(): string {
    return 'Такой лиги не существует';
  }
}

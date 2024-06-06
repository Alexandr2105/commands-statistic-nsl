import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { RelLeaguesSeasonsQueryRepository } from '../../features/rel.leagues.seasons/reposirories/rel.leagues.seasons.query.repository';

@ValidatorConstraint()
@Injectable()
export class CheckLeagueSeasonId implements ValidatorConstraintInterface {
  constructor(
    private readonly relLeaguesSeasonsQueryRepository: RelLeaguesSeasonsQueryRepository,
  ) {}

  async validate(teamId: number) {
    const team =
      await this.relLeaguesSeasonsQueryRepository.getRelLeaguesSeasons(teamId);
    return !!team;
  }

  defaultMessage(): string {
    return 'Такого сезона и лиги не существует';
  }
}

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { RelTeamsRelLeaguesSeasonsQueryRepository } from '../../features/rel.teams.rel.leagues.seasons/reposirories/rel.teams.rel.leagues.seasons.query.repository';

@ValidatorConstraint()
@Injectable()
export class CheckTeamLeagueSeasonId implements ValidatorConstraintInterface {
  constructor(
    private readonly relLeaguesSeasonsQueryRepository: RelTeamsRelLeaguesSeasonsQueryRepository,
  ) {}

  async validate(relTeamsRelLeagueSeasonId: number) {
    const relTeamsRelLeaguesSeasons =
      await this.relLeaguesSeasonsQueryRepository.getRelTeamsRelLeagueSeasonById(
        relTeamsRelLeagueSeasonId,
      );
    return !!relTeamsRelLeaguesSeasons;
  }

  defaultMessage(): string {
    return 'Такого сезона и лиги не существует';
  }
}

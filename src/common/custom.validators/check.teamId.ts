import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TeamsQueryRepository } from 'src/features/teams/reposirories/teams.query.repository';

@ValidatorConstraint()
@Injectable()
export class CheckTeamId implements ValidatorConstraintInterface {
  constructor(private readonly teamsQueryRepository: TeamsQueryRepository) {}

  async validate(teamId: number) {
    const team = await this.teamsQueryRepository.getTeamById(teamId);
    return !!team;
  }

  defaultMessage(): string {
    return 'Такой команды не существует';
  }
}

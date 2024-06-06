import { Module } from '@nestjs/common';
import { RelTeamsRelLeaguesSeasonsRepository } from './reposirories/rel.teams.rel.leagues.seasons.repository';
import { RelTeamsRelLeaguesSeasonsQueryRepository } from './reposirories/rel.teams.rel.leagues.seasons.query.repository';
import { SharedModule } from '../../common/modules/shared.module';
import { CheckTeamLeagueSeasonId } from '../../common/custom.validators/check.team.league.season.id';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [
    RelTeamsRelLeaguesSeasonsRepository,
    RelTeamsRelLeaguesSeasonsQueryRepository,
    CheckTeamLeagueSeasonId,
  ],
  exports: [RelTeamsRelLeaguesSeasonsRepository],
})
export class RelTeamsRelLeaguesSeasonsModule {}

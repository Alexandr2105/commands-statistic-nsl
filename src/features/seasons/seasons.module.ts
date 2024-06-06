import { Module } from '@nestjs/common';
import { SharedModule } from 'src/common/modules/shared.module';
import { CreateSeasonUseCase } from './application/useCases/commands/create.season.use-case';
import { SeasonsRepository } from './repositories/seasons.repository';
import { SeasonController } from './season.controller';
import { AddLeagueToSeasonUseCase } from './application/useCases/commands/add.league.to.season.use-case';
import { SeasonsQueryRepository } from './repositories/seasons.query.repository';
import { LeaguesModule } from '../leagues/leagues.model';
import { AddTeamToLeagueSeasonUseCase } from './application/useCases/commands/add.team.to.league.season.use-case';
import { RelTeamsRelLeaguesSeasonsModule } from '../rel.teams.rel.leagues.seasons/rel.teams.rel.leagues.seasons.module';
import { CheckSeasonId } from '../../common/custom.validators/check.seasonId';

@Module({
  imports: [SharedModule, LeaguesModule, RelTeamsRelLeaguesSeasonsModule],
  controllers: [SeasonController],
  providers: [
    SeasonsRepository,
    SeasonsQueryRepository,
    CreateSeasonUseCase,
    AddLeagueToSeasonUseCase,
    AddTeamToLeagueSeasonUseCase,
    CheckSeasonId,
  ],
  exports: [],
})
export class SeasonsModule {}

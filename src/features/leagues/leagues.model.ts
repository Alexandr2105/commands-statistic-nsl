import { Module } from '@nestjs/common';
import { SharedModule } from 'src/common/modules/shared.module';
import { LeaguesController } from './leagues.controller';
import { LeaguesRepository } from './reposirories/leagues.repository';
import { CreateLeagueUseCase } from './application/useCases/commands/create.league.use-case';
import { LeaguesQueryRepository } from './reposirories/leagues.query.repository';
import { CheckLeagueId } from '../../common/custom.validators/check.leagueId';
import { CheckLeagueSeasonId } from '../../common/custom.validators/check.league.season.id';
import { AddTeamToLeagueSeasonUseCase } from '../seasons/application/useCases/commands/add.team.to.league.season.use-case';
import { RelTeamsLeaguesModule } from '../rel.teams.leagues/rel.teams.leagues.module';
import { LeaguesService } from './application/services/leagues.service';

@Module({
  imports: [SharedModule, RelTeamsLeaguesModule],
  controllers: [LeaguesController],
  providers: [
    LeaguesRepository,
    LeaguesQueryRepository,
    CreateLeagueUseCase,
    CheckLeagueId,
    CheckLeagueSeasonId,
    AddTeamToLeagueSeasonUseCase,
    LeaguesService,
  ],
  exports: [LeaguesQueryRepository],
})
export class LeaguesModule {}

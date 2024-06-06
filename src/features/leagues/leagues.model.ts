import { Module } from '@nestjs/common';
import { SharedModule } from 'src/common/modules/shared.module';
import { LeaguesController } from './leagues.controller';
import { LeaguesRepository } from './reposirories/leagues.repository';
import { CreateLeagueUseCase } from './application/useCases/commands/create.league.use-case';
import { LeaguesQueryRepository } from './reposirories/leagues.query.repository';
import { CheckLeagueId } from '../../common/custom.validators/check.leagueId';

@Module({
  imports: [SharedModule],
  controllers: [LeaguesController],
  providers: [
    LeaguesRepository,
    LeaguesQueryRepository,
    CreateLeagueUseCase,
    CheckLeagueId,
  ],
  exports: [LeaguesQueryRepository],
})
export class LeaguesModule {}

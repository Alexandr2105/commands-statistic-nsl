import { Module } from '@nestjs/common';
import { SharedModule } from 'src/common/modules/shared.module';
import { CreateSeasonUseCase } from './application/useCases/commands/create.season.use-case';
import { SeasonsRepository } from './repositories/seasons.repository';
import { SeasonController } from './season.controller';
import { AddLeagueToSeasonUseCase } from './application/useCases/commands/add.league.to.season.use-case';
import { SeasonsQueryRepository } from './repositories/seasons.query.repository';
import { LeaguesModule } from '../leagues/leagues.model';
import { CheckSeasonId } from '../../common/custom.validators/check.seasonId';
import { SeasonService } from './application/services/season.service';

@Module({
  imports: [SharedModule, LeaguesModule],
  controllers: [SeasonController],
  providers: [
    SeasonsRepository,
    SeasonsQueryRepository,
    CreateSeasonUseCase,
    AddLeagueToSeasonUseCase,
    CheckSeasonId,
    SeasonService,
  ],
  exports: [],
})
export class SeasonsModule {}

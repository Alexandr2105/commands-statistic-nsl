import { Module } from '@nestjs/common';
import { RelLeaguesSeasonsRepository } from './reposirories/rel.leagues.seasons.repository';
import { RelLeaguesSeasonsQueryRepository } from './reposirories/rel.leagues.seasons.query.repository';
import { SharedModule } from '../../common/modules/shared.module';
import { CheckLeagueSeasonId } from '../../common/custom.validators/check.league.season.id';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [
    RelLeaguesSeasonsRepository,
    RelLeaguesSeasonsQueryRepository,
    CheckLeagueSeasonId,
  ],
  exports: [],
})
export class RelLeaguesSeasonsModule {}

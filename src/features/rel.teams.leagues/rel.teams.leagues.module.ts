import { Module } from '@nestjs/common';
import { RelTeamsLeaguesRepository } from './reposirories/rel.teams.leagues.repository';
import { SharedModule } from '../../common/modules/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [RelTeamsLeaguesRepository],
  exports: [RelTeamsLeaguesRepository],
})
export class RelTeamsLeaguesModule {}

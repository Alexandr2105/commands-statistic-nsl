import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './common/modules/shared.module';
import { UsersModule } from './features/users/user.module';
import { TeamsModule } from './features/teams/teams.module';
import { LeaguesModule } from './features/leagues/leagues.model';
import { SeasonsModule } from './features/seasons/seasons.module';
import { RelLeaguesSeasonsModule } from './features/rel.leagues.seasons/rel.leagues.seasons.module';
import { RelTeamsRelLeaguesSeasonsModule } from './features/rel.teams.rel.leagues.seasons/rel.teams.rel.leagues.seasons.module';
import { StagesModule } from './features/stages/stages.module';
import { ScoresModule } from './features/scores/scores.module';

@Module({
  imports: [
    SharedModule,
    UsersModule,
    TeamsModule,
    LeaguesModule,
    SeasonsModule,
    RelLeaguesSeasonsModule,
    RelTeamsRelLeaguesSeasonsModule,
    StagesModule,
    ScoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

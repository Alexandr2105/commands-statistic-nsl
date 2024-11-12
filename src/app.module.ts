import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './common/modules/shared.module';
import { UsersModule } from './features/users/user.module';
import { TeamsModule } from './features/teams/teams.module';
import { LeaguesModule } from './features/leagues/leagues.model';
import { SeasonsModule } from './features/seasons/seasons.module';
import { StagesModule } from './features/stages/stages.module';
import { ScoresModule } from './features/scores/scores.module';
import { RelTeamsLeaguesModule } from './features/rel.teams.leagues/rel.teams.leagues.module';

@Module({
  imports: [
    SharedModule,
    UsersModule,
    TeamsModule,
    LeaguesModule,
    SeasonsModule,
    RelTeamsLeaguesModule,
    StagesModule,
    ScoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

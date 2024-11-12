import { Module } from '@nestjs/common';
import { SharedModule } from 'src/common/modules/shared.module';
import { TeamsController } from './teams.controller';
import { TeamsRepository } from './reposirories/teams.repository';
import { TeamsQueryRepository } from './reposirories/teams.query.repository';
import { CheckTeamId } from 'src/common/custom.validators/check.teamId';
import { CreateTeamUseCase } from './application/useCases/create.team.use-case';

@Module({
  imports: [SharedModule],
  controllers: [TeamsController],
  providers: [
    TeamsRepository,
    TeamsQueryRepository,
    CheckTeamId,
    CreateTeamUseCase,
  ],
  exports: [],
})
export class TeamsModule {}

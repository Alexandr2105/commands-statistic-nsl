import { Module } from '@nestjs/common';
import { SharedModule } from '../../common/modules/shared.module';
import { CreateScoreUseCase } from './application/useCases/create.score.use-case';
import { ScoresRepository } from './repositories/scores.repository';
import { StagesModule } from '../stages/stages.module';
import { ScoresController } from './scores.controller';

@Module({
  imports: [SharedModule, StagesModule],
  controllers: [ScoresController],
  providers: [CreateScoreUseCase, ScoresRepository],
  exports: [],
})
export class ScoresModule {}

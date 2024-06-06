import { Module } from '@nestjs/common';
import { SharedModule } from '../../common/modules/shared.module';
import { CreateScoreUseCase } from './application/useCases/create.score.use-case';
import { ScoresRepository } from './repositories/scores.repository';
import { ScoresQueryRepository } from './repositories/scores.query.repository';
import { ScoresController } from './scores.controller';

@Module({
  imports: [SharedModule],
  controllers: [ScoresController],
  providers: [CreateScoreUseCase, ScoresRepository, ScoresQueryRepository],
  exports: [],
})
export class ScoresModule {}

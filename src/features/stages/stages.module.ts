import { Module } from '@nestjs/common';
import { StagesController } from './stages.controller';
import { CreateStageUseCase } from './application/useCases/create.stage.use-case';
import { SharedModule } from '../../common/modules/shared.module';
import { StagesRepository } from './repositories/stages.repository';
import { StagesQueryRepository } from './repositories/stages.query.repository';
import { CheckStageId } from '../../common/custom.validators/check.stage.id';

@Module({
  imports: [SharedModule],
  controllers: [StagesController],
  providers: [
    CreateStageUseCase,
    StagesRepository,
    StagesQueryRepository,
    CheckStageId,
  ],
  exports: [StagesQueryRepository],
})
export class StagesModule {}

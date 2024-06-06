import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StagesRepository } from '../../repositories/stages.repository';
import { Stages } from '../../../../tables/stages';
import { CreateStageDto } from '../../dto/create.stage.dto';

export class CreateStageCommand {
  constructor(public readonly body: CreateStageDto) {}
}

@CommandHandler(CreateStageCommand)
export class CreateStageUseCase implements ICommandHandler<CreateStageCommand> {
  constructor(private readonly stageRepository: StagesRepository) {}

  async execute(command: CreateStageCommand): Promise<any> {
    const newStage = Stages.build({
      title: command.body.title,
      description: command.body.description,
    });
    return this.stageRepository.createStage(newStage);
  }
}

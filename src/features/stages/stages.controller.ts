import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStageDto } from './dto/create.stage.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStageCommand } from './application/useCases/create.stage.use-case';
import { StagesQueryRepository } from './repositories/stages.query.repository';

@Controller('stages')
export class StagesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly stagesQueryRepository: StagesQueryRepository,
  ) {}

  @Post()
  async createNewStage(@Body() body: CreateStageDto) {
    return this.commandBus.execute(new CreateStageCommand(body));
  }

  @Get()
  async getAllStages() {
    return this.stagesQueryRepository.getAllStages();
  }
}

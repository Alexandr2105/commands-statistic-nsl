import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStageDto } from './dto/create.stage.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStageCommand } from './application/useCases/create.stage.use-case';
import { StagesQueryRepository } from './repositories/stages.query.repository';
import { LeagueIdDto } from '../leagues/dto/league.id.dto';
import { Stages } from '../../tables/stages';
import {
  SwaggerDecoratorByCreateStage,
  SwaggerDecoratorByGetAllStagesByLeagueId,
} from '../../common/swagger-decorators/swagger.stages.decarator';

@Controller('stages')
export class StagesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly stagesQueryRepository: StagesQueryRepository,
  ) {}

  @SwaggerDecoratorByCreateStage()
  @Post(':leagueId')
  async createNewStage(
    @Body() body: CreateStageDto,
    @Param() param: LeagueIdDto,
  ): Promise<Stages> {
    return this.commandBus.execute(
      new CreateStageCommand(body, param.leagueId),
    );
  }

  @SwaggerDecoratorByGetAllStagesByLeagueId()
  @Get(':leagueId')
  async getAllStagesByLeagueId(@Param() param: LeagueIdDto): Promise<Stages[]> {
    return this.stagesQueryRepository.getAllStagesByLeagueId(param.leagueId);
  }
}

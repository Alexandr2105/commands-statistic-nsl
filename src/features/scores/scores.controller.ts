import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateScoreDto } from './dto/create.score.dto';
import { CreateScoreCommand } from './application/useCases/create.score.use-case';
import { Scores } from '../../tables/scores';
import { StageIdTeamIdDto } from './dto/stageId.teamId.dto';
import { SwaggerDecoratorByCreateScore } from '../../common/swagger-decorators/swagger.scores.decarator';

@Controller('scores')
export class ScoresController {
  constructor(private readonly commandBus: CommandBus) {}

  @SwaggerDecoratorByCreateScore()
  @Post(':stageId/:teamId')
  async createScore(
    @Body() body: CreateScoreDto,
    @Param() param: StageIdTeamIdDto,
  ): Promise<Scores> {
    return this.commandBus.execute(new CreateScoreCommand(body, param));
  }
}

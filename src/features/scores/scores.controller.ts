import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateScoreDto } from './dto/create.score.dto';
import { CreateScoreCommand } from './application/useCases/create.score.use-case';
import { ScoresQueryRepository } from './repositories/scores.query.repository';

@Controller('scores')
export class ScoresController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly scoresQueryRepository: ScoresQueryRepository,
  ) {}

  @Post()
  async createScore(@Body() body: CreateScoreDto) {
    return this.commandBus.execute(new CreateScoreCommand(body));
  }

  @Get()
  async getScores() {
    return this.scoresQueryRepository.getAllScores();
  }
}

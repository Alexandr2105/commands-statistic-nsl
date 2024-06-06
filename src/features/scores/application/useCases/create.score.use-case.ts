import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateScoreDto } from '../../dto/create.score.dto';
import { ScoresRepository } from '../../repositories/scores.repository';
import { Scores } from '../../../../tables/scores';

export class CreateScoreCommand {
  constructor(public readonly body: CreateScoreDto) {}
}

@CommandHandler(CreateScoreCommand)
export class CreateScoreUseCase implements ICommandHandler<CreateScoreCommand> {
  constructor(private readonly scoresRepository: ScoresRepository) {}

  async execute(command: CreateScoreCommand): Promise<any> {
    const newScore = Scores.build({
      scoreCount: command.body.score,
      relTeamsRelLeaguesSeasonId: command.body.relTeamsRelLeagueSeasonId,
      stageId: command.body.stageId,
    });
    return this.scoresRepository.createNewScore(newScore);
  }
}

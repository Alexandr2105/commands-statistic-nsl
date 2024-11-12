import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateScoreDto } from '../../dto/create.score.dto';
import { ScoresRepository } from '../../repositories/scores.repository';
import { Scores } from '../../../../tables/scores';
import { StageIdTeamIdDto } from '../../dto/stageId.teamId.dto';
import { StagesQueryRepository } from '../../../stages/repositories/stages.query.repository';

export class CreateScoreCommand {
  constructor(
    public readonly body: CreateScoreDto,
    public readonly param: StageIdTeamIdDto,
  ) {}
}

@CommandHandler(CreateScoreCommand)
export class CreateScoreUseCase implements ICommandHandler<CreateScoreCommand> {
  constructor(
    private readonly scoresRepository: ScoresRepository,
    private readonly stagesQueryRepository: StagesQueryRepository,
  ) {}

  async execute(command: CreateScoreCommand): Promise<Scores> {
    const stageInfo = await this.stagesQueryRepository.getStageById(
      command.param.stageId,
    );
    const score = command.body.points / stageInfo.races;

    const newScore = Scores.build({
      points: command.body.points,
      stageId: command.param.stageId,
      teamId: command.param.teamId,
      score: score,
    });
    return this.scoresRepository.createNewScore(newScore);
  }
}

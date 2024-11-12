import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Seasons } from 'src/tables/seasons';
import { CreateSeasonDto } from '../../../dto/create.season.dto';
import { SeasonsRepository } from '../../../repositories/seasons.repository';

export class CreateSeasonCommand {
  constructor(public readonly body: CreateSeasonDto) {}
}

@CommandHandler(CreateSeasonCommand)
export class CreateSeasonUseCase
  implements ICommandHandler<CreateSeasonCommand>
{
  constructor(private readonly seasonRepository: SeasonsRepository) {}

  async execute(command: CreateSeasonCommand): Promise<Seasons> {
    const newSeason = Seasons.build({
      description: command.body.description,
      title: command.body.title,
    });
    return this.seasonRepository.createSeason(newSeason);
  }
}

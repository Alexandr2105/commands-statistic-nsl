// import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
// import { CreateStageDto } from '../../../stages/dto/create.stage.dto';
// import { Races } from '../../../../tables/races';
// import { RacesRepository } from '../../reposirories/races.repository';
//
// export class CreateRaceCommand {
//   constructor(
//     public readonly body: CreateStageDto,
//     public readonly stageId: number,
//   ) {}
// }
//
// @CommandHandler(CreateRaceCommand)
// export class CreateRaceUseCase implements ICommandHandler<CreateRaceCommand> {
//   constructor(private readonly racesRepository: RacesRepository) {}
//
//   async execute(command: CreateRaceCommand): Promise<any> {
//     const race = Races.build({
//       title: command.body.title,
//       description: command.body.description,
//       stageId: command.stageId,
//     });
//
//     return this.racesRepository.createNewRace(race);
//   }
// }

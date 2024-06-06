// import { Body, Controller, Param, Post } from '@nestjs/common';
// import { CommandBus } from '@nestjs/cqrs';
// import { CreateRaceDto } from './dto/create.race.dto';
// import { CreateRaceCommand } from './application/useCases/create.race.use-case';
// import { StageIdDto } from '../stages/dto/stage.id.dto';
//
// @Controller('races')
// export class RacesController {
//   constructor(private readonly commandBus: CommandBus) {}
//
//   @Post(':stageId')
//   async createNewRace(@Param() param: StageIdDto, @Body() body: CreateRaceDto) {
//     return this.commandBus.execute(new CreateRaceCommand(body, param.stageId));
//   }
// }

import { Body, Controller, Post } from '@nestjs/common';
import { CreateLegueDto } from './dto/create.league.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateLeagueCommand } from './application/useCases/commands/create.league.use-case';

@Controller('leagues')
export class LeaguesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createLeague(@Body() body: CreateLegueDto) {
    return this.commandBus.execute(new CreateLeagueCommand(body));
  }
}

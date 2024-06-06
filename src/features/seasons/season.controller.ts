import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSeasonDto } from './dto/create.season.dto';
import { CreateSeasonCommand } from './application/useCases/commands/create.season.use-case';
import { AddLeagueToSeasonCommand } from './application/useCases/commands/add.league.to.season.use-case';
import { AddTeamToLeagueSeasonCommand } from './application/useCases/commands/add.team.to.league.season.use-case';
import { AddTeamToLeagueSeasonDto } from './dto/add.team.to.league.season.dto';

@Controller('seasons')
export class SeasonController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createLeague(@Body() body: CreateSeasonDto) {
    return this.commandBus.execute(new CreateSeasonCommand(body));
  }

  @Post(':seasonId/leagues/:leagueId')
  async addLeagueToSeason(
    @Param('seasonId') seasonId: number,
    @Param('leagueId') leagueId: number,
  ) {
    return this.commandBus.execute(
      new AddLeagueToSeasonCommand(seasonId, leagueId),
    );
  }

  @Post(':leagueSeasonId/:teamId')
  async addTeamToLeagueSeason(@Param() param: AddTeamToLeagueSeasonDto) {
    return this.commandBus.execute(
      new AddTeamToLeagueSeasonCommand(param.leagueSeasonId, param.teamId),
    );
  }
}

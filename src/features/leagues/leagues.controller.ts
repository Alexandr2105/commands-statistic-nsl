import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLeagueDto } from './dto/create.league.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateLeagueCommand } from './application/useCases/commands/create.league.use-case';
import { AddTeamToLeagueSeasonDto } from '../seasons/dto/add.team.to.league.season.dto';
import { AddTeamToLeagueSeasonCommand } from '../seasons/application/useCases/commands/add.team.to.league.season.use-case';
import { Leagues } from '../../tables/leagues';
import { RelTeamsLeagues } from '../../tables/rel.teams.leagues';
import { LeaguesService } from './application/services/leagues.service';
import {
  SwaggerDecoratorByAddTeamToLeagueSeason,
  SwaggerDecoratorByCreateLeague,
  SwaggerDecoratorByGetLeague,
} from '../../common/swagger-decorators/swagger.leagues.decarator';

@Controller('leagues')
export class LeaguesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly leaguesService: LeaguesService,
  ) {}

  @SwaggerDecoratorByCreateLeague()
  @Post()
  async createLeague(@Body() body: CreateLeagueDto): Promise<Leagues> {
    return this.commandBus.execute(new CreateLeagueCommand(body));
  }

  @SwaggerDecoratorByAddTeamToLeagueSeason()
  @Post(':leagueId/:teamId')
  async addTeamToLeagueSeason(
    @Param() param: AddTeamToLeagueSeasonDto,
  ): Promise<RelTeamsLeagues> {
    return this.commandBus.execute(
      new AddTeamToLeagueSeasonCommand(param.leagueId, param.teamId),
    );
  }

  @SwaggerDecoratorByGetLeague()
  @Get(':leagueId')
  async getLeague(@Param('leagueId') leagueId: string): Promise<Leagues> {
    return this.leaguesService.getLeaguesByIdWithModels(leagueId);
  }
}

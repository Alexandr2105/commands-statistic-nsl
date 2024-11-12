import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateSeasonDto } from './dto/create.season.dto';
import { CreateSeasonCommand } from './application/useCases/commands/create.season.use-case';
import { AddLeagueToSeasonCommand } from './application/useCases/commands/add.league.to.season.use-case';
import { Seasons } from '../../tables/seasons';
import { SeasonService } from './application/services/season.service';

@Controller('seasons')
export class SeasonController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly seasonService: SeasonService,
  ) {}

  @Post()
  async createSeason(@Body() body: CreateSeasonDto): Promise<Seasons> {
    return this.commandBus.execute(new CreateSeasonCommand(body));
  }

  @Post(':seasonId/leagues/:leagueId')
  async addLeagueToSeason(
    @Param('seasonId') seasonId: string,
    @Param('leagueId') leagueId: string,
  ) {
    return this.commandBus.execute(
      new AddLeagueToSeasonCommand(seasonId, leagueId),
    );
  }

  @Get(':seasonId')
  async getSeasonBy(@Param('seasonId') seasonId: string): Promise<Seasons> {
    return this.seasonService.getSeasonByIdWithModels(seasonId);
  }
}

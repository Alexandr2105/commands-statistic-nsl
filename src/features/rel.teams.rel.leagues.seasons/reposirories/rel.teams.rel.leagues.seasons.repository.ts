import { RelTeamsRelLeaguesSeasons } from '../../../tables/relTeamsRelLeaguesSeasons';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RelTeamsRelLeaguesSeasonsRepository {
  constructor() {}

  async addTeamToLeagueSeason(
    relTeamsRelLeaguesSeasons: RelTeamsRelLeaguesSeasons,
  ) {
    return relTeamsRelLeaguesSeasons.save();
  }
}

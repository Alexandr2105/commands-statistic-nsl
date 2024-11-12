import { Injectable } from '@nestjs/common';
import { RelTeamsLeagues } from '../../../tables/rel.teams.leagues';

@Injectable()
export class RelTeamsLeaguesRepository {
  constructor() {}

  async addTeamToLeagueSeason(
    relTeamsLeagues: RelTeamsLeagues,
  ): Promise<RelTeamsLeagues> {
    return relTeamsLeagues.save();
  }
}

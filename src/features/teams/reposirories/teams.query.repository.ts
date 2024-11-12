import { Inject, Injectable } from '@nestjs/common';
import { providersConst } from 'src/common/const/providers';
import { Teams } from 'src/tables/teams';

@Injectable()
export class TeamsQueryRepository {
  constructor(
    @Inject(providersConst.teamsRepository)
    private readonly teamsModel: typeof Teams,
  ) {}

  async getTeamById(teamId: string) {
    return this.teamsModel.findOne({ where: { id: teamId } });
  }
}

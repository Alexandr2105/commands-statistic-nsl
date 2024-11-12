// import { Inject } from '@nestjs/common';
// import { providersConst } from '../../../common/const/providers';
// import { RelTeamsLeagues } from '../../../tables/rel.teams.leagues';
//
// export class RelTeamsLeaguesQueryRepository {
//   constructor(
//     @Inject(providersConst.relTeamRelLeaguesSeasonsRepository)
//     private readonly relTeamsRelLeaguesSeasons: typeof RelTeamsLeagues,
//   ) {}
//
//   async getRelLeaguesSeasons(relTeamsRelLeagueSeasonId: string) {
//     return await this.relTeamsRelLeaguesSeasons.findAll({
//       where: { id: relTeamsRelLeagueSeasonId },
//     });
//   }
// }

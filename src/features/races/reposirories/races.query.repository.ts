// import { Inject } from '@nestjs/common';
// import { providersConst } from '../../../common/const/providers';
// import { Races } from '../../../tables/races';
//
// export class RacesQueryRepository {
//   constructor(
//     @Inject(providersConst.racesRepository)
//     private readonly races: typeof Races,
//   ) {}
//
//   async getRaceById(raceId: number) {
//     return this.races.findOne({ where: { id: raceId } });
//   }
// }

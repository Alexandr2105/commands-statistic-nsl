// import {
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
// } from 'class-validator';
// import { Injectable } from '@nestjs/common';
// import { RelTeamsLeaguesRepository } from '../../features/rel.teams.leagues/reposirories/rel.teams.leagues.repository';
//
// @ValidatorConstraint()
// @Injectable()
// export class CheckTeamLeagueSeasonId implements ValidatorConstraintInterface {
//   constructor(
//     private readonly relTeamsLeaguesRepository: RelTeamsLeaguesRepository,
//   ) {}
//
//   async validate(relTeamsRelLeagueSeasonId: string) {
//     const relTeamsRelLeaguesSeasons =
//       await this.relTeamsLeaguesRepository.getRelLeaguesSeasons(
//         relTeamsRelLeagueSeasonId,
//       );
//     return !!relTeamsRelLeaguesSeasons;
//   }
//
//   defaultMessage(): string {
//     return 'Такого сезона и лиги не существует';
//   }
// }

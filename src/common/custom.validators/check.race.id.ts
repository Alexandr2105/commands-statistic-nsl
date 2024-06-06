// import {
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
// } from 'class-validator';
// import { Injectable } from '@nestjs/common';
// import { RacesQueryRepository } from '../../features/races/reposirories/races.query.repository';
//
// @ValidatorConstraint()
// @Injectable()
// export class CheckRaceId implements ValidatorConstraintInterface {
//   constructor(private readonly racesQueryRepository: RacesQueryRepository) {}
//
//   async validate(racesId: number) {
//     const race = await this.racesQueryRepository.getRaceById(racesId);
//     return !!race;
//   }
//
//   defaultMessage(): string {
//     return 'Такого гонки не существует';
//   }
// }

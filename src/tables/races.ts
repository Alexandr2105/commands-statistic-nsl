// import {
//   BelongsTo,
//   Column,
//   ForeignKey,
//   Model,
//   Table,
// } from 'sequelize-typescript';
// import { Stages } from './stages';
//
// @Table
// export class Races extends Model {
//   @Column({ allowNull: false })
//   title: string;
//
//   @Column({ allowNull: false })
//   description: string;
//
//   @ForeignKey(() => Stages)
//   @Column({ allowNull: false })
//   stageId: number;
//
//   @BelongsTo(() => Stages)
//   stages: Stages;
// }

import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Scores } from './scores';

@Table
export class Stages extends Model {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  description: string;

  @HasMany(() => Scores)
  scores: Scores[];
}

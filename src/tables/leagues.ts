import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { RelLeaguesSeasons } from './rel.leagues.seasons';
import { Seasons } from './seasons';

@Table
export class Leagues extends Model {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  description: string;

  @BelongsToMany(() => Seasons, () => RelLeaguesSeasons)
  seasons: Seasons[];
}

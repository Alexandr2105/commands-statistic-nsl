import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Leagues } from './leagues';
import { RelLeaguesSeasons } from './rel.leagues.seasons';

@Table
export class Seasons extends Model {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  description: string;

  @BelongsToMany(() => Leagues, () => RelLeaguesSeasons)
  leagues: Leagues[];
}

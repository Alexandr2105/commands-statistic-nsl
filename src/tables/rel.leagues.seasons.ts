import {
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Leagues } from './leagues';
import { RelTeamsRelLeaguesSeasons } from './relTeamsRelLeaguesSeasons';
import { Seasons } from './seasons';
import { Teams } from './teams';

@Table
export class RelLeaguesSeasons extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => Leagues)
  @Column({ allowNull: false })
  leagueId: number;

  @ForeignKey(() => Seasons)
  @Column({ allowNull: false })
  seasonId: number;

  @BelongsTo(() => Leagues)
  leagues: Leagues;

  @BelongsTo(() => Seasons)
  seasons: Seasons;

  @BelongsToMany(() => Teams, () => RelTeamsRelLeaguesSeasons)
  teams: Teams[];
}

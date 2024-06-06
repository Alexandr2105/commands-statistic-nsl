import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { RelLeaguesSeasons } from './rel.leagues.seasons';
import { Scores } from './scores';
import { Teams } from './teams';
import { Stages } from './stages';

@Table
export class RelTeamsRelLeaguesSeasons extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => Teams)
  @Column({ allowNull: false })
  teamId: number;

  @BelongsTo(() => Teams)
  teams: Teams;

  @ForeignKey(() => RelLeaguesSeasons)
  @Column({ allowNull: false })
  relLeaguesSeasonsId: number;

  @BelongsTo(() => RelLeaguesSeasons)
  relLeaguesSeasons: RelLeaguesSeasons;

  @HasMany(() => Scores)
  scores: Scores[];
}

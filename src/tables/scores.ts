import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { RelTeamsRelLeaguesSeasons } from './relTeamsRelLeaguesSeasons';
import { Stages } from './stages';

@Table
export class Scores extends Model {
  @Column({ allowNull: false })
  scoreCount: number;

  @ForeignKey(() => RelTeamsRelLeaguesSeasons)
  @Column({ allowNull: false })
  relTeamsRelLeaguesSeasonId: number;

  @BelongsTo(() => RelTeamsRelLeaguesSeasons)
  relTeamsRelLeaguesSeasons: RelTeamsRelLeaguesSeasons;

  @ForeignKey(() => Stages)
  @Column({ allowNull: false })
  stageId: number;

  @BelongsTo(() => Stages)
  stages: Stages;
}

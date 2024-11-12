import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Teams } from './teams';
import { RelTeamsLeagues } from './rel.teams.leagues';
import { Seasons } from './seasons';
import { Stages } from './stages';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Leagues extends Model<Leagues> {
  @ApiProperty({ type: 'string', format: 'UUID' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ type: 'string', required: false })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;

  @BelongsToMany(() => Teams, () => RelTeamsLeagues)
  teams: Teams[];

  @ApiProperty({ type: 'string', format: 'UUID', required: false })
  @ForeignKey(() => Seasons)
  @Column({ type: DataType.UUID, allowNull: true })
  seasonId: string;

  @BelongsTo(() => Seasons)
  seasons: Seasons;

  @HasMany(() => Stages)
  stages: Stages[];
}

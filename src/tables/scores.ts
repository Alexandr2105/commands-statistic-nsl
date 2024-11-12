import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stages } from './stages';
import { Teams } from './teams';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Scores extends Model<Scores> {
  @ApiProperty({ type: 'string', format: 'UUID' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  points: number;

  @ApiProperty({ type: 'number' })
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  score: number;

  @ApiProperty({ type: 'string', format: 'UUID' })
  @ForeignKey(() => Teams)
  @Column({ type: DataType.UUID, allowNull: false })
  teamId: string;

  @BelongsTo(() => Teams)
  teams: Teams;

  @ApiProperty({ type: 'string', format: 'UUID' })
  @ForeignKey(() => Stages)
  @Column({ type: DataType.UUID, allowNull: false })
  stageId: string;

  @BelongsTo(() => Stages)
  stages: Stages;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;
}

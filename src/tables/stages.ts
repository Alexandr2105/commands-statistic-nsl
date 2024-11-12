import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Scores } from './scores';
import { Leagues } from './leagues';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Stages extends Model<Stages> {
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

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({ type: 'string' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  races: number;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;

  @ApiProperty({ type: 'string', format: 'UUID' })
  @ForeignKey(() => Leagues)
  @Column({ type: DataType.UUID, allowNull: false })
  leagueId: string;

  @BelongsTo(() => Leagues)
  leagues: Leagues;

  @HasMany(() => Scores)
  scores: Scores[];
}

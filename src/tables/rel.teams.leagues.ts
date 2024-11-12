import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Teams } from './teams';
import { Leagues } from './leagues';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class RelTeamsLeagues extends Model<RelTeamsLeagues> {
  @ApiProperty({ type: 'string', format: 'UUID' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ type: 'string', format: 'UUID' })
  @ForeignKey(() => Teams)
  @Column({ type: DataType.UUID, allowNull: false })
  teamId: string;

  @ApiProperty({ type: 'string', format: 'UUID' })
  @ForeignKey(() => Leagues)
  @Column({ type: DataType.UUID, allowNull: false })
  leagueId: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;
}

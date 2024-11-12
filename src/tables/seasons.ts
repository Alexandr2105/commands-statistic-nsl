import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Leagues } from './leagues';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Seasons extends Model<Seasons> {
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

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;

  @HasMany(() => Leagues)
  leagues: Leagues[];
}

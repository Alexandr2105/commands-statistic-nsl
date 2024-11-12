import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Users } from './users';
import { Scores } from './scores';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Teams extends Model<Teams> {
  @ApiProperty({ type: 'string', format: 'UUID' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  tittle: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  club: string;

  @ApiProperty({ type: 'number' })
  @Column({ type: DataType.FLOAT, allowNull: true })
  totalScore: number;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;

  @HasMany(() => Users)
  users: Users[];

  @HasMany(() => Scores)
  scores: Scores[];
}

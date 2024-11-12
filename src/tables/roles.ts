import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Users } from './users';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Roles extends Model<Roles> {
  @ApiProperty({ type: 'string', format: 'UUID' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ type: 'string', format: 'UUID' })
  @ForeignKey(() => Users)
  @Column({ type: DataType.UUID, allowNull: false })
  userId: string;

  @BelongsTo(() => Users)
  user: Users;

  @ApiProperty({ type: 'string' })
  @Column({ allowNull: false })
  title: string;

  @ApiProperty({ type: 'string' })
  @Column({ allowNull: false })
  description: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;
}

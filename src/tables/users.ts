import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Roles } from './roles';
import { Teams } from './teams';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Users extends Model<Users> {
  @ApiProperty({ type: 'string', format: 'UUID' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  userName: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({ type: 'string' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  createdAt?: string;

  @ApiProperty({ type: 'string', example: '2024-06-23T14:00:05.223Z' })
  updatedAt?: string;

  @HasOne(() => Roles)
  role: Roles;

  @ApiProperty({ type: 'string', format: 'UUID' })
  @ForeignKey(() => Teams)
  @Column({ type: DataType.UUID, allowNull: false })
  teamId: string;

  @BelongsTo(() => Teams)
  teams: Teams;
}

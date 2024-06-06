import { BelongsTo, Column, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Roles } from "./roles";
import { Teams } from "./teams";

@Table
export class Users extends Model {
    @Column({ allowNull: false })
    userName: string;

    @Column({ allowNull: false })
    email: string;

    @Column({ allowNull: false })
    password: string;

    @HasOne(() => Roles)
    role: Roles;

    @ForeignKey(() => Teams)
    @Column({ allowNull: false })
    teamId: number;

    @BelongsTo(() => Teams)
    teams: Teams;
}
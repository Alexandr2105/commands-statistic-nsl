import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Users } from "./users";

@Table
export class Roles extends Model {
    @ForeignKey(() => Users)
    @Column({ allowNull: false })
    userId: number;

    @BelongsTo(() => Users)
    user: Users;

    @Column({ allowNull: false })
    title: string;

    @Column({ allowNull: false })
    description: string;
}
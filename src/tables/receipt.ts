import { BelongsTo, ForeignKey, Model, Table } from "sequelize-typescript";
import { Teams } from "./teams";

@Table
export class Receipt extends Model {
    @ForeignKey(() => Teams)
    teamId: number;
    @BelongsTo(()=>Teams)
    teams:Teams;
}
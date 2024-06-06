import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Users } from './users';
import { RelLeaguesSeasons } from './rel.leagues.seasons';
import { RelTeamsRelLeaguesSeasons } from './relTeamsRelLeaguesSeasons';

@Table
export class Teams extends Model {
  @Column({ allowNull: false })
  tittle: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  city: string;

  @Column({ allowNull: false })
  club: string;

  @HasMany(() => Users)
  users: Users[];

  @BelongsToMany(() => RelLeaguesSeasons, () => RelTeamsRelLeaguesSeasons)
  relLeaguesSeason: RelLeaguesSeasons[];
}

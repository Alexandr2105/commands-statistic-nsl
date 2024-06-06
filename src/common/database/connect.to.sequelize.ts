import { Sequelize } from 'sequelize-typescript';
import { settings } from '../settings';
import { Roles } from 'src/tables/roles';
import { Teams } from 'src/tables/teams';
import { RelLeaguesSeasons } from 'src/tables/rel.leagues.seasons';
import { Leagues } from 'src/tables/leagues';
import { Users } from 'src/tables/users';
import { Receipt } from 'src/tables/receipt';
import { RelTeamsRelLeaguesSeasons } from 'src/tables/relTeamsRelLeaguesSeasons';
import { Scores } from 'src/tables/scores';
import { Seasons } from 'src/tables/seasons';
import { Stages } from 'src/tables/stages';

export const connectToSequelize = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: settings.POSTGRES_HOST,
        port: +settings.POSTGRES_PORT,
        username: 'postgres',
        password: settings.POSTGRES_PASSWORD,
        database: 'postgres',
      });
      sequelize.addModels([
        Leagues,
        Receipt,
        RelLeaguesSeasons,
        RelTeamsRelLeaguesSeasons,
        Roles,
        Scores,
        Seasons,
        Stages,
        Teams,
        Users,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

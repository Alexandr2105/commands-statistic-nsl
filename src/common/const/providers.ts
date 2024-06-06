import { Leagues } from 'src/tables/leagues';
import { Roles } from 'src/tables/roles';
import { Seasons } from 'src/tables/seasons';
import { Teams } from 'src/tables/teams';
import { Users } from 'src/tables/users';
import { RelLeaguesSeasons } from '../../tables/rel.leagues.seasons';
import { RelTeamsRelLeaguesSeasons } from '../../tables/relTeamsRelLeaguesSeasons';
import { Stages } from '../../tables/stages';
import { Scores } from '../../tables/scores';

export enum providersConst {
  usersRepository = 'USERS_REPOSITORY',
  rolesRepository = 'ROLES_REPOSITORY',
  teamsRepository = 'TEAMS_REPOSITORY',
  leaguesRepository = 'LEAGUES_REPOSITORY',
  seasonsRepository = 'SEASONS_REPOSITORY',
  relLeaguesSeasonsRepository = 'REL_LEAGUES_SEASONS_REPOSITORY',
  relTeamRelLeaguesSeasonsRepository = 'REL_TEAMS_REL_LEAGUES_SEASONS_REPOSITORY',
  stagesRepository = 'STAGES_REPOSITORY',
  scoresRepository = 'SCORES_REPOSITORY',
}

export const providers = [
  {
    provide: providersConst.usersRepository,
    useValue: Users,
  },
  {
    provide: providersConst.rolesRepository,
    useValue: Roles,
  },
  {
    provide: providersConst.teamsRepository,
    useValue: Teams,
  },
  {
    provide: providersConst.leaguesRepository,
    useValue: Leagues,
  },
  {
    provide: providersConst.seasonsRepository,
    useValue: Seasons,
  },
  {
    provide: providersConst.relLeaguesSeasonsRepository,
    useValue: RelLeaguesSeasons,
  },
  {
    provide: providersConst.relTeamRelLeaguesSeasonsRepository,
    useValue: RelTeamsRelLeaguesSeasons,
  },
  {
    provide: providersConst.stagesRepository,
    useValue: Stages,
  },
  {
    provide: providersConst.scoresRepository,
    useValue: Scores,
  },
];

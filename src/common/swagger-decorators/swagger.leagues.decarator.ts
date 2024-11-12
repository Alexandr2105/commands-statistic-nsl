import { applyDecorators, HttpStatus } from '@nestjs/common';
import { Leagues } from '../../tables/leagues';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { schemaBadRequestForSwagger } from './types-for-swagger/schema.bad.request.for.swagger';
import { RelTeamsLeagues } from '../../tables/rel.teams.leagues';

export function SwaggerDecoratorByCreateLeague(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Create league' }),
    ApiResponse({ status: HttpStatus.CREATED, type: Leagues }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      schema: schemaBadRequestForSwagger,
    }),
  );
}

export function SwaggerDecoratorByAddTeamToLeagueSeason(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Add team to league' }),
    ApiResponse({ status: HttpStatus.CREATED, type: RelTeamsLeagues }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      schema: schemaBadRequestForSwagger,
    }),
  );
}

export function SwaggerDecoratorByGetLeague(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Get league' }),
    ApiResponse({ status: HttpStatus.OK, type: Leagues }),
  );
}

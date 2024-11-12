import { applyDecorators, HttpStatus } from '@nestjs/common';
import { Leagues } from '../../tables/leagues';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { schemaBadRequestForSwagger } from './types-for-swagger/schema.bad.request.for.swagger';
import { Stages } from '../../tables/stages';

export function SwaggerDecoratorByCreateStage(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Create stage' }),
    ApiResponse({ status: HttpStatus.CREATED, type: Stages }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      schema: schemaBadRequestForSwagger,
    }),
  );
}

export function SwaggerDecoratorByGetAllStagesByLeagueId(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Get all stage for current league' }),
    ApiResponse({ status: HttpStatus.OK, type: Leagues }),
  );
}

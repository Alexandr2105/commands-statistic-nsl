import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { schemaBadRequestForSwagger } from './types-for-swagger/schema.bad.request.for.swagger';
import { Teams } from '../../tables/teams';

export function SwaggerDecoratorByCreateTeams(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Create team' }),
    ApiResponse({ status: HttpStatus.CREATED, type: Teams }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      schema: schemaBadRequestForSwagger,
    }),
  );
}

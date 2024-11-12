import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { schemaBadRequestForSwagger } from './types-for-swagger/schema.bad.request.for.swagger';
import { Scores } from '../../tables/scores';

export function SwaggerDecoratorByCreateScore(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Create scores' }),
    ApiResponse({ status: HttpStatus.CREATED, type: Scores }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      schema: schemaBadRequestForSwagger,
    }),
  );
}

import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { schemaBadRequestForSwagger } from './types-for-swagger/schema.bad.request.for.swagger';
import { Users } from '../../tables/users';

export function SwaggerDecoratorByCreateUsers(): MethodDecorator {
  return applyDecorators(
    ApiOperation({ summary: 'Create user' }),
    ApiResponse({ status: HttpStatus.CREATED, type: Users }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      schema: schemaBadRequestForSwagger,
    }),
  );
}

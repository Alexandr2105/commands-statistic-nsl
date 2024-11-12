import { Module } from '@nestjs/common';
import { connectToSequelize } from '../database/connect.to.sequelize';
import { providers } from '../const/providers';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [...connectToSequelize, ...providers],
  exports: [...connectToSequelize, ...providers, CqrsModule],
})
export class SharedModule {}

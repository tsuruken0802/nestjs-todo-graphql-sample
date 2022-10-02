import { Module } from '@nestjs/common';
import { TodosResolver } from './todo.resolvers';

@Module({
  providers: [TodosResolver],
})
export class TodosModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDataSource } from './data-source';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

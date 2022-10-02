import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  public async getAllTodos(): Promise<Todo[]> {
    const todos = await this.todoRepository.find({});

    // Nest.jsにはエラーハンドリング用のクラスがありその1つを利用しています
    //
    if (!todos) throw new NotFoundException();

    return todos;
  }
}

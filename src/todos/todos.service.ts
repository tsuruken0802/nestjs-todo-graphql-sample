import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDto } from './dto/todo.dto';
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

  public async addTodo(todoDto: TodoDto): Promise<Todo> {
    const newTodo = this.todoRepository.create(todoDto);
    await this.todoRepository.save(newTodo).catch((err) => {
      new InternalServerErrorException();
    });
    return newTodo;
  }

  public async updateTodo(
    todoDto: TodoDto,
    todoId: number,
  ): Promise<Todo | null> {
    const todo = await this.todoRepository.findOneBy({ id: todoId });
    if (!todo) {
      return null;
    }
    todo.body = todoDto.body;
    const result = await this.todoRepository.save(todo);
    return result;
  }

  public async deleteTodo(todoId: number): Promise<number | null> {
    return (await this.todoRepository.delete(todoId)).affected;
  }
}

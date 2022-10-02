import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './entities/todo.entity';
import { TodosService } from './todos.service';

@Resolver()
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query(() => [Todo])
  public async todos() {
    return await this.todosService.getAllTodos().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Todo)
  public async addTodo(@Args('todoDto') todoDto: TodoDto): Promise<Todo> {
    return await this.todosService.addTodo(todoDto).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Todo)
  public async updateTodo(
    @Args('todoDto') todoDto: TodoDto,
    @Args('todoId') todoId: number,
  ): Promise<Todo> {
    return await this.todosService.updateTodo(todoDto, todoId).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Int)
  public async deleteTodo(@Args('todoId') todoId: number): Promise<number> {
    return await this.todosService.deleteTodo(todoId).catch((err) => {
      throw err;
    });
  }
}

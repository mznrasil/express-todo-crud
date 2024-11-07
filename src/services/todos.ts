import {ITodoRepository} from "../repositories/todos";
import {ITodo} from "../models/todos";
import {NotFoundError} from "../errors";

export class TodoService {
    constructor(private todoRepository: ITodoRepository) {}

    async createTodo(data: Partial<ITodo>): Promise<ITodo> {
        return await this.todoRepository.create(data);
    }

    async getTodoByID(id: string): Promise<ITodo | null> {
        const todo = await this.todoRepository.findByID(id);
        if (!todo) {
            throw new NotFoundError("Todo", id);
        }
        return todo;
    }

    async getTodos(): Promise<ITodo[]> {
        return await this.todoRepository.findAll();
    }

    async update(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
        const todo = await this.todoRepository.update(id, data);
        if (!todo) {
            throw new NotFoundError("Todo", id);
        }
        return todo
    }

    async delete(id: string) {
        const todo = await this.todoRepository.findByID(id);
        if (!todo) {
            throw new NotFoundError("Todo", id);
        }
        return await this.todoRepository.delete(id);
    }
}
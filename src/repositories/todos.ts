import {ITodo, Todo} from "../models/todos";

export interface ITodoRepository {
    create(todo: Partial<ITodo>): Promise<ITodo>;
    findByID(id: string): Promise<ITodo | null>;
    findAll(): Promise<ITodo[]>;
    update(id: string, todo: Partial<ITodo>): Promise<ITodo | null>;
    delete(id: string): Promise<void>;
}

export class TodoRepository implements ITodoRepository {
    async create(todo: Partial<ITodo>): Promise<ITodo> {
        return await Todo.create(todo);
    }

    async findByID(id: string): Promise<ITodo | null> {
        return Todo.findById(id);
    }

    async findAll(): Promise<ITodo[]> {
        return Todo.find();
    }

    async update(id: string, todo: Partial<ITodo>): Promise<ITodo | null> {
        return Todo.findByIdAndUpdate(id, todo, {new: true});
    }

    async delete(id: string): Promise<void> {
        await Todo.findByIdAndDelete(id);
    }
}